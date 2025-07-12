const QuizButton = ({className, value, onClick, children}) => {
    return (
        <button className={className} onClick={() => {onClick(value)}}>{children}</button>
    )
}

export default QuizButton