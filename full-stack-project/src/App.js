import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Help from './Help'

import Form from './Form'

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="site-wrap">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/form" component={Form} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App