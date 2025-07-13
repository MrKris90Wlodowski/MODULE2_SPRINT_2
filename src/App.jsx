import { useState } from "react";
// import "./index.css";
import QuizButton from "./components/QuizButton";
import Wrapper from "./components/Wrapper";
import QUESTIONS from "./data/quizQuestions";
import LineText from "./components/LineText";


const answers = [];

const App = () => {
  const [nextAnswer, setNextAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [introStage, setIntroStage] = useState(true);
  const [quizStage, setQuizStage] = useState(false);
  const [resultStage, setResultStage] = useState(false);

  console.log(QUESTIONS.length);
  // console.log(QUESTIONS[nextAnswer]);
  console.log(nextAnswer);
  // const answers = [];
  const hideElement = () => {
    setIntroStage(false);
    setQuizStage(true);
  };
  const nextQuestion = (value) => {
    const newAnswerIndex = nextAnswer + 1
    // setNextAnswer(newAnswerIndex + 1);
    if (value === true) {
      setCorrectAnswer(correctAnswer + 1);
      answers.push({isCorrect: value})
    } else {
      answers.push({isCorrect: value})
    }

    if (newAnswerIndex === 10) {
      setQuizStage(false);
      setResultStage(true)
    } else {
      setNextAnswer(newAnswerIndex);
    }
  };
  // const showresult = () => {
  //   if (nextAnswer === 10) {
  //     setQuizStage(false);
  //     setResultStage(true)
  //   } else {
  //     setNextAnswer
  //   }
  // }
  const question = QUESTIONS[nextAnswer].text;
  const answer1 = QUESTIONS[nextAnswer].answers[0].text;
  const answerValue1 = QUESTIONS[nextAnswer].answers[0].isCorrect;
  const answer2 = QUESTIONS[nextAnswer].answers[1].text;
  const answerValue2 = QUESTIONS[nextAnswer].answers[1].isCorrect;
  const answer3 = QUESTIONS[nextAnswer].answers[2].text;
  const answerValue3 = QUESTIONS[nextAnswer].answers[2].isCorrect;
  const answer4 = QUESTIONS[nextAnswer].answers[3].text;
  const answerValue4 = QUESTIONS[nextAnswer].answers[3].isCorrect;

  console.log(answers)
  return (
    <Wrapper>
      {introStage && (
        <Wrapper>
          <h1>QUIZ MMA</h1>
          <QuizButton className="lightBlue" onClick={hideElement}>
            Rozpocznij Quiz
          </QuizButton>
        </Wrapper>
      )}
      {quizStage && (
        <Wrapper>
          <LineText>{question}</LineText>
          {/* <QuizButton className="lightBlue">{question}</QuizButton> */}
          <QuizButton onClick={(value) => {nextQuestion(value)}} value={answerValue1}>
            {answer1}
          </QuizButton>
          <QuizButton onClick={(value) => {nextQuestion(value)}} value={answerValue2}>
            {answer2}
          </QuizButton>
          <QuizButton onClick={(value) => {nextQuestion(value)}} value={answerValue3}>
            {answer3}
          </QuizButton>
          <QuizButton onClick={(value) => {nextQuestion(value)}} value={answerValue4}>
            {answer4}
          </QuizButton>
          <h1>CORRECT {correctAnswer}</h1>
        </Wrapper>
      )}
      {resultStage &&
      <Wrapper>
        {QUESTIONS.map((quest, index) => (
          <div>
            <LineText>
              Pytanie {index + 1}: {quest.text}
            </LineText>
            <LineText>
              Pytanie Twoja odpowiedź: {index}
            </LineText>
          </div>
        ))}
      </Wrapper>
      }
    </Wrapper>
  );
};

export default App;
