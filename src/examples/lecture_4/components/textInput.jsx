import { useEffect, useRef } from "react"

function TextInput() {
  const inputRef = useRef(null)
  const buttonRef = useRef(null)

  function focusInput() {
    inputRef.current.focus()
  }

  useEffect(() => {
    buttonRef.current.style.backgroundColor = "red"
  }, [])

  return (
    <>
      <h2>Focus Input</h2>
      <input ref={inputRef} id="input" type="text" />
      <button ref={buttonRef} onClick={focusInput}>
        Focus Button
      </button>
    </>
  )
}

export default TextInput
