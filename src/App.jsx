import { useState } from "react";
import "./index.css";
import QuizButton from "./components/QuizButton";
import Wrapper from "./components/Wrapper";
import QUESTIONS from "./data/quizQuestions";

const App = () => {
  const [nextAnswer, setNextAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  console.log(QUESTIONS.length);
  console.log(QUESTIONS[nextAnswer]);
  const hideElement = () => {};
  const nextQuestion = (value) => {
    setNextAnswer(nextAnswer + 1);
    if (value === true) {
      setCorrectAnswer(correctAnswer + 1)
    }
  };
  const question = QUESTIONS[nextAnswer].text;
  const answer1 = QUESTIONS[nextAnswer].answers[0].text;
  const answerValue1 = QUESTIONS[nextAnswer].answers[0].isCorrect;
  const answer2 = QUESTIONS[nextAnswer].answers[1].text;
  const answerValue2 = QUESTIONS[nextAnswer].answers[1].isCorrect;
  const answer3 = QUESTIONS[nextAnswer].answers[2].text;
  const answerValue3 = QUESTIONS[nextAnswer].answers[2].isCorrect;
  const answer4 = QUESTIONS[nextAnswer].answers[3].text;
  const answerValue4 = QUESTIONS[nextAnswer].answers[3].isCorrect;

  return (
    <Wrapper>
      <Wrapper>
        <h1>QUIZ MMA</h1>
        <QuizButton className="lightBlue" onClick={hideElement}>Rozpocznij Quiz</QuizButton>
        <QuizButton className="lightBlue">{question}</QuizButton>
      </Wrapper>
      <Wrapper>
        <QuizButton onClick={nextQuestion} value={answerValue1}>{answer1}</QuizButton>
        <QuizButton onClick={nextQuestion} value={answerValue2}>{answer2}</QuizButton>
        <QuizButton onClick={nextQuestion} value={answerValue3}>{answer3}</QuizButton>
        <QuizButton onClick={nextQuestion} value={answerValue4}>{answer4}</QuizButton>
        <h1>CORRECT {correctAnswer}</h1>
      </Wrapper>
    </Wrapper>
  );
};

export default App;
