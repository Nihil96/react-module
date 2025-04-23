// import { useState } from "react"
import "./App.css"
import PostsDetails from "./examples/lecture_9/components/postsDetail"
import UsersDetails from "./examples/lecture_9/components/usersDetail"
import calculateAverage from "./examples/lecture_9/helpers/calculateAverage"
import { useAverage } from "./examples/lecture_9/hooks/useAverage"
import useCounter from "./examples/lecture_9/hooks/useCounter"
import WindowSizeDisplay from "./exercises/exercise_2/components/windowSizeDisplay"

function App() {
  const { counter, increment } = useCounter(0)
  const average = useAverage([1, 2, 3, 4, 5])
  const averageNumber = calculateAverage([1, 2, 3, 4, 5])

  return (
    <>
      {/* Example 1 */}
      {/* <UsersDetails /> */}
      {/* <PostsDetails /> */}

      {/* Example 2 */}
      {/* <p>Counter: {counter}</p>
      <button onClick={increment}>Increment the counter</button> */}

      {/* Example 3 */}
      {/* <h2>Average: {average} - result from the custom hook</h2>
      <h2>Average: {averageNumber} - result from the helper function</h2> */}

      {/*Exercise 1*/}
      <WindowSizeDisplay />
    </>
  )
}

export default App
