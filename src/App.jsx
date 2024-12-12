import { QUIZS } from "./data/quizs";
import Circle from "./components/Circle";
import Containner from "./components/Container";
import ContainerQuiz from "./components/ContainerQuiz";

function App() {
  return (
    <>
      <main
        style={{ backgroundImage: "url(/bg.jpg)" }}
        className="min-h-screen  w-full bg-no-repeat bg-cover grid place-content-center"
      >
        <Containner>
          <div className="grid grid-cols-7  gap-2  mb-5">
            <Circle>1</Circle> <Circle>2</Circle> <Circle>3</Circle>
            <Circle>4</Circle> <Circle>5</Circle> <Circle>6</Circle>
            <Circle>7</Circle> <Circle>8</Circle> <Circle>9</Circle>
            <Circle>10</Circle>
          </div>
          {QUIZS.map((item, idx) => (
            <ContainerQuiz
              key={idx}
              quiz={item.quiz}
              options={item.options}
            />
          ))}
        </Containner>
      </main>
    </>
  );
}

export default App;
