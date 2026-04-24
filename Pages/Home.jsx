import { useState } from "react";
import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";
import createTodo from "../Interfaces/ITodo";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = createTodo(Date.now(), text);
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}