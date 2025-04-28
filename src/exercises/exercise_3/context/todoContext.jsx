import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: uuidv4(), text, isCompleted: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    console.log(newTodo, "new todo");
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) => {
      prevTodos.map((todo) => {
        todo.id === id ? { ...todo, text: newText } : todo;
      });
    });
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
      prevTodos.map((todo) => {
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
      });
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, editTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
