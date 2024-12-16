const Circle = ({ children, classname }) => {
  return (
    <div
      className={`${classname} bg-blue-desing w-11 h-11 rounded-full grid place-content-center`}
    >
      {children}
    </div>
  );
};
export default Circle;
