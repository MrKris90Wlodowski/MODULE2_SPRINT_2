const QuizButton = ({className, isCorrect, onclick, children}) => {
    return (
        <button className={className} isTrue={isCorrect} onClick={onclick}>{children}</button>
    )
}

export default QuizButton