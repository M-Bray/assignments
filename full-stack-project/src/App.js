import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';

import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/help" component={Help} />
      </Switch>
      </div>
    )
  }
}

export default App;
