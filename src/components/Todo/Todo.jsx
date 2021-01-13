import { useState } from "react"

const Todo = (props) => {
  const {index, todo, completeTodo} = props
  const [isOpen, setIsOpen] = useState(false)

  const showTodo = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <li className="todo">
        <label className="name" onClick={showTodo}>{isOpen ? '-' : '+'} {todo.name}</label>
        {isOpen ? 
          <div className="todo-contents">
            <p>{todo.description}</p>
            <input className="done-checkbox" type="checkbox" defaultChecked={todo.done} />
          </div>
          : ''
        }
      </li>
    </>
  )
}

export default Todo