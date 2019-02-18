import React from 'react'

export default class App extends React.Component { 
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <hi className="header">{this.state.count}</hi>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

