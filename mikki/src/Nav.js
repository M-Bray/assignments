import React from 'react'
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav-tab">
      <Link to="/" className="nav-buttons" >Home</Link>
      <Link to="/quality" className="nav-buttons" >Quality</Link>
      <Link to="/article" className="nav-buttons" >Article</Link>
      <input className="search-bar" type="text" placeholder="Search.."></input>
    </nav>
  )
}

export default Nav