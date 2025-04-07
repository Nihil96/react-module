import { useState } from "react"

const KeyboardEvents = () => {
  const [keyboardKey, setKeyboardKey] = useState(null)

  const handleKeyDown = (event) => {
    console.log(event.key)
    setKeyboardKey(event.key)
  }

  return (
    <>
      <input
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Press any key"
      />
      <h2>{keyboardKey}</h2>
    </>
  )
}

export default KeyboardEvents
