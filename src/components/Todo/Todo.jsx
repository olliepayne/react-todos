import { useState } from "react"

const Todo = (props) => {
  const {index, todo} = props
  const [isOpen, setIsOpen] = useState(false)

  const showTodo = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <li key={index}>
        <label className="name" onClick={showTodo}>{isOpen ? '-' : '+'} {todo.name}</label>
        {isOpen ? <p>{todo.description}</p> : ''}
      </li>
    </>
  )
}

export default Todo