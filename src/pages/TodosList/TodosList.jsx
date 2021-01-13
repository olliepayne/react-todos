import './TodosList.css'
import Todo from '../../components/Todo/Todo'

const TodosList = (props) => {
  const {todos, completeTodo} = props

  return (
    <>
      <h3>Todo List</h3>
      <ul className="todos-list">
        {todos.map((todo, index) => (
          <Todo key={index} className="todo" index={index} todo={todo} isOpen={false} completeTodo={completeTodo} />
        ))}
      </ul>
    </>
  )
}

export default TodosList