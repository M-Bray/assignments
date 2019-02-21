import React from 'react'

export default class App extends React.Component { 
  constructor(){
    super()
    this.state = {
      loading: false,
      character: {},
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  componentDidMount() {
    this.setState({loading: true})
    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data => {
      this.setState({
        loading: false,
        character: data
      })
    })
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
        {this.state.loading ? <p>Loading...</p> : this.state.character.name}
        <hi className="header">{this.state.count}</hi>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

