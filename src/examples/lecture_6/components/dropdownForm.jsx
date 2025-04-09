import { useState } from "react"

const DropdownForm = () => {
  const [country, setCountry] = useState("")

  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Selected Country", country)
  }

  return (
    <div>
      <h2>Dropdown Form Example</h2>

      <form onSubmit={handleSubmit}>
        <label>Select Country: </label>
        <select value={country} onChange={handleCountryChange}>
          <option value="">Select</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
          <option value="macedonia">Macedonia</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <p>You selected: {country}</p>
    </div>
  )
}

export default DropdownForm
