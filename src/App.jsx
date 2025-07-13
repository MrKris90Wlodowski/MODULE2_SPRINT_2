import { useState } from "react";
import QuizButton from "./components/QuizButton";
import Wrapper from "./components/Wrapper";
import QUESTIONS from "./data/quizQuestions";
import LineText from "./components/LineText";
import SpanText from "./components/SpanText";

const App = () => {
  const [nextAnswer, setNextAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [introStage, setIntroStage] = useState(true);
  const [quizStage, setQuizStage] = useState(false);
  const [resultStage, setResultStage] = useState(false);
  const [userAnswer, setUserAnswer] = useState([]);
  const [isPassQuiz, setIsPassQuiz] = useState(false);

  console.log(QUESTIONS.length);
  console.log(nextAnswer);
  const hideElement = () => {
    setIntroStage(false);
    setQuizStage(true);
  };
  const handleResultAnswer = (value, answerText, questionText) => {
    setUserAnswer((prev) => [
      ...prev,
      { textQue: questionText, textAns: answerText, isCorrect: value },
    ]);
  };
  const nextQuestion = (value) => {
    const newAnswerIndex = nextAnswer + 1;
    // const sumCorrectAnswer = correctAnswer + 1
    if (value === true) {
      setCorrectAnswer(correctAnswer + 1);
    }
    if (newAnswerIndex === 10) {
      setQuizStage(false);
      setResultStage(true);
    } else {
      setNextAnswer(newAnswerIndex);
    }
    if (correctAnswer >= 8) {
      setIsPassQuiz(true);
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
  const percentCorrect = (correctAnswer * 10).toFixed(2);

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
          <QuizButton
            onClick={(value, textAns, textQue) => {
              nextQuestion(value);
              handleResultAnswer(value, textAns, textQue);
            }}
            value={answerValue1}
            textAns={answer1}
            textQue={question}
          >
            {answer1}
          </QuizButton>
          <QuizButton
            onClick={(value, textAns, textQue) => {
              nextQuestion(value);
              handleResultAnswer(value, textAns, textQue);
            }}
            value={answerValue2}
            textAns={answer2}
            textQue={question}
          >
            {answer2}
          </QuizButton>
          <QuizButton
            onClick={(value, textAns, textQue) => {
              nextQuestion(value);
              handleResultAnswer(value, textAns, textQue);
            }}
            value={answerValue3}
            textAns={answer3}
            textQue={question}
          >
            {answer3}
          </QuizButton>
          <QuizButton
            onClick={(value, textAns, textQue) => {
              nextQuestion(value);
              handleResultAnswer(value, textAns, textQue);
            }}
            value={answerValue4}
            textAns={answer4}
            textQue={question}
          >
            {answer4}
          </QuizButton>
          <h1>CORRECT {correctAnswer}</h1>
        </Wrapper>
      )}
      {resultStage && (
        <Wrapper>
          <LineText className={`bigFontSize ${isPassQuiz ? "hardGreen" : "hardRed"}`}>{isPassQuiz ? "Gratulacje! quiz zaliczony!" : "Niestety, quiz niezaliczony"}</LineText>
          <LineText className={`mediumFontSize ${isPassQuiz ? "hardGreen" : "hardRed"}`}>
            Twój wynik to {percentCorrect}% ({correctAnswer} z 10 poprawnych odpowiedzi)
          </LineText>
          <Wrapper className="flexStyleLeftSide">
            {userAnswer.map((quest, index) => (
              <Wrapper key={index} className="flexStyleLeftSide">
                <LineText>
                  Pytanie {index + 1}: {quest.textQue}
                </LineText>
                {
                  <LineText>
                    Twoja odpowiedź:{" "}
                    <SpanText
                      className={quest.isCorrect ? "hardGreen" : "hardRed"}
                    >
                      {quest.textAns}
                    </SpanText>
                  </LineText>
                }
              </Wrapper>
            ))}
          </Wrapper>
          <QuizButton className="green">Powrót do startu</QuizButton>
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default App;
