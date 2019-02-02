import React from 'react';
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Quality from './Quality'
import Article from './Article'

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="site-wrap">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quality" component={Quality} />
        <Route exact path="/article" component={Article} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App