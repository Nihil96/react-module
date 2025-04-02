import { useEffect, useState } from "react"

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      <h1>List of users</h1>
      {users.length > 0 ? (
        <div style={{}}>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </div>
            )
          })}
        </div>
      ) : (
        <p>Users not found</p>
      )}
    </div>
  )
}

export default Users
