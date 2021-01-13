import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <Router>
      <div className="navbar">
        <ul className="navbar-links">
          <Route exact path="/">
            Home
          </Route> 
        </ul>
      </div>
    </Router>
  )
}

export default Navbar