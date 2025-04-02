import { useEffect, useState } from "react"

function InfiniteLoop() {
  const [count, setCount] = useState(10)

  // this will cause infinite loop
  useEffect(() => {
    setCount(count + 1)
  })

  // this will cause infinite loop as well
  useEffect(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}

export default InfiniteLoop
