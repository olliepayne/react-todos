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
        <h4 onClick={showTodo}>{todo.name}</h4>
        {isOpen ? <p>{todo.description}</p> : ''}
      </li>
    </>
  )
}

export default Todo