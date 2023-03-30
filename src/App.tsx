import React, { useState } from "react";
import { MouseEvent } from "react";
import { feachQzQuestions } from "./API";
import { TbLoader2 } from "react-icons/tb";
//componest
import QuesCart from "./components/QuesCart";
import { Difficulty, QuestionState } from "./API";
// style

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await feachQzQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber;
    setLoading(false);
  };

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //taking ans form user
      const answer = e.currentTarget.value;
      // checking if answer is correct
      const correct = questions[number].correct_answer === answer;
      // adding points if answer is correct
      if (correct) setScore((prev) => prev + 1);
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, AnswerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  return (
    <>
      <div className="App w-full h-screen bg-gray-400 flex flex-col  items-center justify-center">
        <h1 className=" text-4xl bg text-blue-500 ">REACT QUIZ</h1>
        {userAnswers.length === TOTAL_QUESTIONS ||
          (gameOver && (
            <button
              className="start bg-cyan-400 rounded-lg px-5 py-1 text-center "
              onClick={startTrivia}
            >
              Start
            </button>
          ))}

        {}

        {!gameOver && (
          <p className="score text-2xl text-blue-500">Score:{score}</p>
        )}
        {loading && (
          <p>
            <TbLoader2 className="text-4xl text-cyan-700 animate-spin" />
          </p>
        )}
        {!loading && !gameOver && (
          <QuesCart
            questionNr={number + 1}
            totalQestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        number + 1 === userAnswers.length &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button
            className="next text-2xl px-3 py-2 rounded-lg bg-cyan-500"
            onClick={nextQuestion}
          >
            Next
          </button>
        ) : null}
      </div>
    </>
  );
};

export default App;
