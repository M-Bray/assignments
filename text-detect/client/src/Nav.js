import React from 'react'
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="navTab">
      <Link to="/" className="navButtons" ><b>H</b>ome</Link>
      <Link to="/quality" className="navButtons" ><b>Q</b>uality</Link>
    </nav>
  )
}


export default Nav