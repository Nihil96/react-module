import useFetchData from "../hooks/useFetchData"

function PostsDetails() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Posts Data</h1>
      {data.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.title}</h3>
            <p>{user.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PostsDetails
