import { useRef } from "react"

function UncontrolledForm() {
  const inputRef = useRef(null)

  const handleSubmit = () => {
    console.log(`Input value: ${inputRef.current.value}`)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UncontrolledForm
