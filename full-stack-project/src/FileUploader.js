import React, { Component, createRef } from 'react'

export default class componentName extends Component {
  constructor() {
    super()
    this.file = null
    this.setFileRef = vDomElement => this.file = vDomElement
  }

  getFile() {
    
  }
  render() {
    const props = {
      setFileRef: this.setFileRef,
      file: this.file
    }
    return (
      <div>
        
      </div>
    )
  }
}

