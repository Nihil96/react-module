import { useContext } from "react"
import Navbar from "./navbar"
import { UserContext } from "../context/userContext"

function Header() {
  const { user } = useContext(UserContext) // the Header component has access to the user as well
  // const { count } = useContext(CounterContext) // this will not work since the Header is not wrapped in the CounterProvider component
  console.log(user, "HEADER")

  return (
    <div>
      <h2>Simple Header Component</h2>
      {/* {user.name ? user.name : "No user to display"} */}
      <Navbar />
    </div>
  )
}

export default Header
