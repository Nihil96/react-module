import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(10)

    function incrementCounter() {
        setCounter(counter + 1)
    }

    const decrementCounter = () => setCounter(counter - 1)

    return (
        <div>
            <h1>Counter</h1>
            <h3>{counter}</h3>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </div>
    )
}

export default Counter
