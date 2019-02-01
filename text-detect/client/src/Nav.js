import React from 'react'
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav-tab">
      <Link to="/" className="nav-buttons" ><b>H</b>ome</Link>
      <Link to="/quality" className="nav-buttons" ><b>Q</b>uality</Link>
    </nav>
  )
}


export default Nav