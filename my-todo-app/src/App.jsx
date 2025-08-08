import { useState } from "react";
import TodoFormik from "./components/TodoFormFormik";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  return (
    <div>
      <h1>my todo list</h1>
      <TodoFormik addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
