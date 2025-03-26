const Message = ({ msg, toggleMsg, show, color, changeMsgColor }) => {
    return (
        <>
            <span style={{ color: `${color}` }}>
                {show ? msg : "No Message"}
            </span>{" "}
            <br />
            <button onClick={toggleMsg}>
                {show ? "Hide" : "Show"} Message
            </button>
            <button onClick={changeMsgColor}>Change Color</button>
        </>
    )
}

export default Message
