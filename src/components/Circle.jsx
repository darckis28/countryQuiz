const Circle = ({ children, numberQuiz, idx }) => {
  return (
    <div
      className={`${
        idx < numberQuiz + 1 ? "bg-gradient" : "bg-blue-desing"
      }  w-11 h-11 rounded-full grid place-content-center`}
    >
      {children}
    </div>
  );
};
export default Circle;
