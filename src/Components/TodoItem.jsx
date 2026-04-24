import { useState } from "react";

export default function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-3 mb-2 hover:shadow-sm transition">
      
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 border rounded px-2 py-1 mr-2"
        />
      ) : (
        <span className="flex-1 text-gray-700">{todo.text}</span>
      )}

      <div className="flex gap-2 ml-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm"
          >
            Kaydet
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded text-sm"
          >
            Güncelle
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
        >
          Sil
        </button>
      </div>
    </div>
  );
}