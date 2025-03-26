const ChildComponent = ({ changeUserInfo }) => {
    return (
        <>
            <h2>Child Component</h2>
            <button
                onClick={() =>
                    changeUserInfo({
                        age: 34,
                        name: "Hristijan",
                        surname: "Popovski",
                    })
                }
            >
                Update user info
            </button>
        </>
    )
}

export default ChildComponent
