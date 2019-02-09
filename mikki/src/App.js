import React, { Component } from 'react';
import Nav from './Nav'
import Home from './Home'
import Article from './Article'
import Quality from './Quality'

import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quality" component={Quality} />
          <Route exact path="/article" component={Article} />
        </Switch>
        <h1>This is the beggining of Mikki's Restaurant website</h1>
      </div>
    );
  }
}

export default App;
