import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/api/todos">All Todos</a></li>
      </ul>
    </div>
  )
}

export default Navbar