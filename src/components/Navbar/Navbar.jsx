import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <h2>React Todos</h2>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/api/todos">All Todos</a></li>
        <li><a href="/api/todos/new">New Todo</a></li>
      </ul>
    </nav>
  )
}

export default Navbar