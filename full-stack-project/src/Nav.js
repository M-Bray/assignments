import React from 'react'
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav-tab">
      <Link to="/" className="nav-buttons" ><b>H</b>ome</Link>
      <Link to="/help" className="nav-buttons" ><b>H</b>elp</Link>
      <Link to="/form" className="nav-buttons"><b>F</b>orm</Link>
    </nav>
  )
}


export default Nav