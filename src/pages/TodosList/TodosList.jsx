import './TodosList.css'
import Todo from '../../components/Todo/Todo'

const TodosList = ({todos}) => {
  return (
    <div className="todos-list-container">
      <h3>Todo List</h3>
      <ul className="todos-list">
        {todos.map((todo, index) => (
          <Todo className="todo" index={index} todo={todo} isOpen={false} />
        ))}
      </ul>
    </div>
  )
}

export default TodosList