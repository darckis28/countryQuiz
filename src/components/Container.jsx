const Containner = ({ children }) => {
  return (
    <section className="bg-blue-desing-two pt-8 pb-8 px-8 rounded-xl min-w-xl">
      <h1 className=" text-center font-bold mb-5 text-gray-desing text-sm ">
        Country Quiz
      </h1>
      {children}
    </section>
  );
};
export default Containner;
