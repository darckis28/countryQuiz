import { useState } from "react";
import ButtonQuiz from "./ButtonQuiz";
import QuizTitle from "./QuizTitle";

const ContainerQuiz = ({
  quizs,
  setIsFinished,
  setScore,
  setNumberQuiz,
  numberQuiz,
}) => {
  const [answered, setAnswered] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState(null);

  function resetAnswer() {
    setAnswered(false);
    setSelectAnswer(null);
  }

  function checkAnswer(answer, index) {
    if (numberQuiz + 1 == quizs.length) {
      setIsFinished(true);
      return;
    }
    setAnswered(true);
    setSelectAnswer(index);
    if (answer.isCorrect) {
      setScore((score) => score + 1);
    }

    setTimeout(() => {
      resetAnswer();
      setNumberQuiz(numberQuiz + 1);
    }, 1000);
  }

  return (
    <div>
      <QuizTitle>{quizs[numberQuiz]?.question}</QuizTitle>
      <div className="grid grid-cols-2 gap-5">
        {quizs[numberQuiz].options?.map((item, idx) => (
          <ButtonQuiz
            idx={idx}
            isCorrect={item.isCorrect}
            selectAnswer={selectAnswer}
            answered={answered}
            onClick={() => checkAnswer(item, idx)}
            key={idx}
          >
            {item.answer}
          </ButtonQuiz>
        ))}
      </div>
    </div>
  );
};
export default ContainerQuiz;
