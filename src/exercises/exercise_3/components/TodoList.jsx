import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

function TodoList() {
  const { todos, deleteTodo, toggleComplete, editTodo } =
    useContext(TodoContext);

  if (todos?.length === 0) {
    return <p>Add some items to the list</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos?.map((todo) => {
        return (
          <li key={todo.id}>
            <button onClick={() => toggleComplete(todo.id)}>
              {todo.isCompleted ? "Undo" : "Complete"}
            </button>
            <span>{todo.text}</span>
            <button
              onClick={() =>
                editTodo(todo.id, prompt("Edit Todo: ", todo.text))
              }
            >
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
