import { useState, useEffect } from "react"

const EffectOnce = () => {
  const [count, setCount] = useState(0)

  // similar to componendDidMount method
  useEffect(() => {
    console.log("useEffect runs only once after initial render")
  }, [])

  console.log(count)
  return (
    <>
      <h2>Example of useEffect that is trigered only once</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default EffectOnce
