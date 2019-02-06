import React, { Component } from 'react'

export default class FileUploader extends Component {
  constructor() {
    super()
    this.fileInput = nullthis.setInputRef = vDomElement => this.fileInput = vDomElement
    this.getFileInput = this.fileInput.bind(this)
  }
  getFileInput() {
    return this.fileInput
  }
  render() {
    const props = {
      setInputRef: this.setInputRef,
      getFileInput: this.getFileInput
    }
    return (
      this.props.children(props)
    )
  }
}
