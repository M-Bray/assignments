import React from 'react';
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Quality from './Quality'

import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="siteWrap">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quality" component={Quality} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App