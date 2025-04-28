import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

function AddTodo() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    console.log("handleAddTodo");
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
