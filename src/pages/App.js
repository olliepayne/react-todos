import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import * as todosAPI from '../services/todos-api'
import Navbar from '../components/Navbar/Navbar'
import TodosList from './TodosList/TodosList'

class App extends React.Component {
  state = {
    todos: [
      {name: 'walk dog'},
      {name: 'take out trash'}
    ]
  }

  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/api/todos" render={() =>
          <TodosList todos={this.state.todos} />
        }/>
      </>
    )
  }
}

export default App;
