const TodosList = ({todos}) => {
  return (
    <div className="todos-container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodosList