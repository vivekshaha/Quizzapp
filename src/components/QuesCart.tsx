import React from "react";
import { FC } from "react";
import { AnswerObject } from "../App";
import { ButtonWrapper } from "./QuesCart.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQestions: number;
};

const QuesCart: FC<Props> = ({
  question,
  questionNr,
  totalQestions,
  answers,
  callback,
  userAnswer,
}) => {
  return (
    <div>
      <p className="number">
        {questionNr} /{totalQestions}
      </p>
      <p
        className="text-2xl"
        dangerouslySetInnerHTML={{ __html: question }}
      ></p>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            key={answer}
          >
            <button
              className="rounded-md"
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </div>
  );
};
export default QuesCart;
