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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          📝 TODO App
        </h1>

        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />

        {todos.length === 0 && (
          <p className="text-center text-gray-400 mt-4">
            Henüz görev yok. 👀
          </p>
        )}
      </div>
    </div>
  );
}