import React, { Component } from 'react'
import Form from "./Form"

class TodoFeature extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem(item){
    this.setState(prevState => ({
      items: [item, ...prevState.items]
    }))
  }

  render(){
    return (
      <div>
        <Form submit={this.addItem} />
        
      </div>
    )
  }
}

export default TodoFeature