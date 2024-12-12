import ButtonQuiz from "./ButtonQuiz";
import QuizTitle from "./QuizTitle";

const ContainerQuiz = ({ quiz, options }) => {
  return (
    <div>
      {" "}
      <QuizTitle>{quiz}</QuizTitle>
      <div className="grid grid-cols-2 gap-5">
        {options?.map((item, idx) => (
          <ButtonQuiz key={idx}>{item}</ButtonQuiz>
        ))}
      </div>
    </div>
  );
};
export default ContainerQuiz;
