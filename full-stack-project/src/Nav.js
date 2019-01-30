import React from 'react'
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav-tab">
      <Link to="/" className="nav-buttons" ><b>H</b>ome</Link>
      <Link to="/help" className="nav-buttons" ><b>H</b>elp</Link>
    </nav>
  )
}


export default Nav