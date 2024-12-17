import Congrats from "../icons/Congrats";
const Congrat = ({ score, onClick }) => {
  return (
    <section className="w-96 bg-blue-desing-two flex flex-col  items-center justify-center px-5 pt-4 pb-12 rounded-2xl ">
      <span>
        <Congrats />
      </span>
      <h2 className="text-2xl text-center my-4 mb-2">
        Congrats! You completed the quiz.
      </h2>
      <p className="text-center mb-10">You answer {score}/10 correctly.</p>
      <button
        onClick={onClick}
        className={` 
          text-white
         bg-gradient
       w-60  rounded-xl  py-4 flex  justify-center items-center gap-2 `}
      >
        Play again
      </button>
    </section>
  );
};
export default Congrat;
