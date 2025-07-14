const Wrapper = ({className="flexStyle", children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Wrapper