import { useState, useEffect } from "react"

const SimpleEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect runs after every re-rerender")
  })

  return (
    <>
      <h2>Example of a simple useEffect</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default SimpleEffect
