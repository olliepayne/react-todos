import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import * as todosAPI from '../services/todos-api'
import Navbar from '../components/Navbar/Navbar'
import TodosList from './TodosList/TodosList'
import NewTodo from './NewTodo/NewTodo'

class App extends React.Component {
  state = {
    todos: [
      {name: 'Walk Dog', description: 'walk the dog @ 12 noon', done: true},
      {name: 'Take out trash', description: 'take out tonight, leave dumpsters out for tomorrow morning', done: false},
      {name: 'Study react', description: 'take 3 hours to knowledge binge react', done: true}
    ]
  }

  completeTodo = () => {

  }

  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/todos" render={() =>
          <TodosList todos={this.state.todos} completeTodo={this.completeTodo} />
        }/>
        <Route exact path="/todos/new" render={() =>
          <NewTodo />
        }/>
      </>
    )
  }
}

export default App;
