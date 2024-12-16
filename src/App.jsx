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
          <div className="flex flex-wrap justify-center  gap-2  mb-5">
            {QUIZS.map((item, idx) => (
              <Circle
                classname={"circle"}
                key={idx}
              >
                {idx + 1}{" "}
              </Circle>
            ))}
          </div>

          <ContainerQuiz quizs={QUIZS} />
        </Containner>
      </main>
    </>
  );
}

export default App;
