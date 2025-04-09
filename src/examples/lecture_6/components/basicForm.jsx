import { useState } from "react"

function BasicForm() {
  const [name, setName] = useState("")

  const handleInputName = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`You submited the form the the name: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          onChange={(e) => handleInputName(e)}
          type="text"
          placeholder="Name"
          value={name}
        />
      </label>
    </form>
  )
}

export default BasicForm
