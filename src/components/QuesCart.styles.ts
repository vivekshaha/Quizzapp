import styled from "styled-components";
type ButtonWrapper = {
  correct: boolean;
  userClicked: boolean;
};
export const ButtonWrapper = styled.div<ButtonWrapper>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
  }
`;
