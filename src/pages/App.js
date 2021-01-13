import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import * as todosAPI from '../services/todos-api'
import Navbar from '../components/Navbar/Navbar'
import TodosList from './TodosList/TodosList'

class App extends React.Component {
  state = {
    todos: [
      {name: 'Walk Dog', description: 'walk the dog @ 12 noon'},
      {name: 'Take out trash', description: 'take out tonight, leave dumpsters out for tomorrow morning'},
      {name: 'Study react', description: 'take 3 hours to knowledge binge react'}
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
