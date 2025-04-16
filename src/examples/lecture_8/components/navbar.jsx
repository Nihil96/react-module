import { useContext } from "react"
import UserProfile from "./userProfile"
import { UserContext } from "../context/userContext"

function Navbar() {
  const { user } = useContext(UserContext)
  console.log(user, "FROM NAVBAR")

  return (
    <div>
      <h3>Simple Navbar Component</h3>
      <UserProfile />
    </div>
  )
}

export default Navbar
