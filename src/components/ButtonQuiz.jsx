import Check from "../icons/Check";
import Close from "../icons/Close";

const ButtonQuiz = ({ children }) => {
  return (
    <button className="w-full rounded-xl bg-blue-desing py-4 flex  justify-center items-center gap-2">
      {children} <Check /> <Close />
    </button>
  );
};
export default ButtonQuiz;
