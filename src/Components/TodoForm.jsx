import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 flex-1 rounded"
        placeholder="Görev ekle..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Ekle
      </button>
    </form>
  );
}