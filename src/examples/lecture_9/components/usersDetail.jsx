import useFetchData from "../hooks/useFetchData"

function UsersDetails() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Users Data</h1>
      {data.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.username}</p>
          </div>
        )
      })}
    </div>
  )
}

export default UsersDetails
