import { useState } from "react";
import Check from "../icons/Check";
import Close from "../icons/Close";

const ButtonQuiz = ({ children, onClick }) => {
  const [active, setActive] = useState(null);
  const [checked, setChecked] = useState(false);
  return (
    <button
      onClick={onClick}
      className={` ${
        checked ? "bg-gradient" : "bg-blue-desing"
      } w-60  rounded-xl  py-4 flex  justify-center items-center gap-2  hover:bg-gradient`}
    >
      {children} {active === 1 && <Check />}
      {active === 2 && <Close />}
    </button>
  );
};
export default ButtonQuiz;
