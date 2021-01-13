import './NewTodo.css'

const NewTodo = () => {
  return (
    <>
      <form className="new-todo-form">
        <div className="field">
          <label>Name: </label>
          <input name="name" type="text" />
        </div>
        <div className="field">
          <label>Description: </label>
          <input name="description" type="text" />
        </div>
      </form>
    </>
  )
}

export default NewTodo