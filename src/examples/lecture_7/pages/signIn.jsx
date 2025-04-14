import { useNavigate } from "react-router-dom"

function SignIn({ isSignedIn, setIsSignedIn }) {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    setIsSignedIn(true)

    setTimeout(() => {
      navigate("/")
    }, 3000)
  }

  return (
    <div>
      <h1>Sign In</h1>
      {isSignedIn ? (
        <p>You are signed in!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="text" name="password" required />
          </div>
          <button type="submit" style={{ marginTop: "10px" }}>
            Sign In
          </button>
        </form>
      )}
    </div>
  )
}

export default SignIn
