export default function createTodo(id, text) {
  return {
    id: id,
    text: text,
    completed: false
  };
}