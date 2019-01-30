import React from 'react'
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav-bar">
      <Link to= "/" className="nav-bar"><b>H</b>ome</Link>
      <Link to="/help" className="nav-bar"><b>H</b>elp</Link>
    </nav>
  )
}

export default Nav