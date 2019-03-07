import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return(
      <div>
        <h1 className="count">{this.state.count}</h1>
        <button onClick={this.handleClick} className="click-button">CLICK</button>
      </div>
    )
  }
}

export default App;
