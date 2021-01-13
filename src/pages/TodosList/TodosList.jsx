import './TodosList.css'

const TodosList = ({todos}) => {
  return (
    <div className="todos-list-container">
      <h3>Todo List</h3>
      <ul className="todos-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <h4>+{todo.name}</h4>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodosList