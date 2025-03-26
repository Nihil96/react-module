import { useState } from "react"
import "./App.css"
// import Greeting from "./examples/lecture_3/components/greeting"
import Message from "./examples/lecture_3/components/message"
import Parent from "./examples/lecture_3/components/parent"
import User from "./examples/lecture_3/components/user"
// import Counter from "./examples/lecture_3/components/counter"

function App() {
    const [show, setShow] = useState(true)
    const [color, setColor] = useState("#cccccc")

    function toggleMsg() {
        setShow(!show)
    }

    const changeColor = () => setColor("red")

    function greet(name) {
        alert(`Hello, ${name}`)
    }

    return (
        <div>
            {/* Example of state in functional components */}
            {/* <Counter /> */}
            {/* <Counter /> */}
            {/* <Counter /> */}
            {/* Example of passing a function as prop */}
            {/* <Greeting name="Darko" greetAlert={greet} /> */}
            {/* <Message
                msg="Hello there, React is awesome!"
                toggleMsg={toggleMsg}
                show={show}
                color={color}
                changeMsgColor={changeColor}
            /> */}
            {/* <Parent /> */}
            <User isLoggedIn={true} />
        </div>
    )
}

export default App
