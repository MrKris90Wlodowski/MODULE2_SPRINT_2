const QuizButton = ({className, value, textAns, textQue, onClick, children}) => {
    return (
        <button className={className} onClick={() => onClick(value, textAns, textQue)}>{children}</button>
    )
}

export default QuizButton