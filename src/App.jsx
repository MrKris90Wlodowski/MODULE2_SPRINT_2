import { useState } from "react";
import "./index.css";
import QuizButton from "./components/QuizButton";
import Wrapper from "./components/Wrapper";
import QUESTIONS from "./data/quizQuestions";

const App = () => {
  const [correctAnswer, setcorrectAnswer] = useState(0);
  console.log(QUESTIONS.length);
  console.log(QUESTIONS[correctAnswer]);

  const nextQuestion = () => {
    setcorrectAnswer(correctAnswer + 1);
  };
  const que = QUESTIONS[0].text;
  return (
    <Wrapper>
      <Wrapper>
        <h1>QUIZ MMA</h1>
        <QuizButton className="lightBlue">Rozpocznij Quiz</QuizButton>
        <QuizButton className="lightBlue">{que}</QuizButton>
      </Wrapper>
      <Wrapper>
        <QuizButton onclick={nextQuestion}>A</QuizButton>
        <QuizButton onclick={nextQuestion}>B</QuizButton>
        <QuizButton onclick={nextQuestion}>C</QuizButton>
        <QuizButton onclick={nextQuestion}>D</QuizButton>
      </Wrapper>
    </Wrapper>
  );
};

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <Wrapper>
//         <p>HI I AM <KRIS></KRIS></p>
//       </Wrapper>
//     </>
//   )
// }

export default App;
