import React from 'react'
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav-tab">
      <Link to="/" className="nav-buttons" >Home</Link>
      <Link to="/help" className="nav-buttons" >Help</Link>
      <Link to="/form" className="nav-buttons">Form</Link>
    </nav>
  )
}


export default Nav