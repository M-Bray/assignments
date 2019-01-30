import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Help from './Help'

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/help" component={Help} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App