const Circle = ({ children }) => {
  return (
    <div className="bg-gradient w-11 h-11 rounded-full grid place-content-center">
      {children}
    </div>
  );
};
export default Circle;
