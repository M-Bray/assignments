import React from 'react'
import { Switch, Route } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"


const MainView = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path= "/services" component={Contact} />
        <Route path="/help" component={Services} />
      </Switch>
    </div>
  )
}

export default MainView