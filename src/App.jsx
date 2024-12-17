import { QUIZS } from "./data/quizs";
import Circle from "./components/Circle";
import Containner from "./components/Container";
import ContainerQuiz from "./components/ContainerQuiz";
import { useState } from "react";
import Congrat from "./components/Congrat";

function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [numberQuiz, setNumberQuiz] = useState(0);

  function resetQuestions() {
    setScore(0);
    setIsFinished(false);
  }
  return (
    <>
      <main
        style={{ backgroundImage: "url(/bg.jpg)" }}
        className="min-h-screen  w-full bg-no-repeat bg-cover grid place-content-center"
      >
        {isFinished ? (
          <Congrat
            score={score}
            onClick={resetQuestions}
          />
        ) : (
          <Containner>
            <div className="flex flex-wrap justify-center  gap-2  mb-5">
              {QUIZS.map((item, idx) => (
                <Circle
                  classname={"circle"}
                  numberQuiz={numberQuiz}
                  key={idx}
                  idx={idx}
                >
                  {idx + 1}
                </Circle>
              ))}
            </div>

            <ContainerQuiz
              setNumberQuiz={setNumberQuiz}
              numberQuiz={numberQuiz}
              quizs={QUIZS}
              setScore={setScore}
              setIsFinished={setIsFinished}
            />
          </Containner>
        )}
      </main>
    </>
  );
}

export default App;
