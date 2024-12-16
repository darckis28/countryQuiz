import { useState } from "react";
import ButtonQuiz from "./ButtonQuiz";
import QuizTitle from "./QuizTitle";
import { QUIZS } from "../data/quizs";

const ContainerQuiz = ({ quizs }) => {
  const [numberQuiz, setNumberQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function checkQuiz(e) {
    if (numberQuiz < QUIZS.length - 1) {
      setNumberQuiz(numberQuiz + 1);
    }
  }
  return (
    <div>
      <QuizTitle>{quizs[numberQuiz]?.quiz}</QuizTitle>
      <div className="grid grid-cols-2 gap-5">
        {quizs[numberQuiz].options?.map((item, idx) => (
          <ButtonQuiz
            onClick={checkQuiz}
            key={idx}
          >
            {item}
          </ButtonQuiz>
        ))}
      </div>
    </div>
  );
};
export default ContainerQuiz;
