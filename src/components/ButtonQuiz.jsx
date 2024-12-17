import { useState } from "react";
import Check from "../icons/Check";
import Close from "../icons/Close";

const ButtonQuiz = ({
  children,
  onClick,
  answered,
  selectAnswer,
  idx,
  isCorrect,
}) => {
  return (
    <button
      disabled={answered}
      onClick={onClick}
      className={` ${
        selectAnswer === idx ? "bg-gradient" : "bg-blue-desing"
      } w-60  rounded-xl  py-4 flex  justify-center items-center gap-2  hover:bg-gradient`}
    >
      {children}
      {answered && isCorrect ? <Check /> : selectAnswer === idx && <Close />}
    </button>
  );
};
export default ButtonQuiz;
