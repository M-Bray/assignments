import React from 'react'

export default class FileUploader extends React.Component {
  constructor() {
    super()
    this.fileInput = null
    this.setInputRef = vDomElement => this.fileInput = vDomElement
    this.getFileInput = this.getFileInput.bind(this)
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
