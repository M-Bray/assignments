import React, { Component } from 'react'

class TodoFeature extends Component {
  constructor() {
    super()
    this.state = {
      item: []
    }
  }

  addItem(item){
    this.setState(ps => ({
      items: [items, ...ps.items]
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