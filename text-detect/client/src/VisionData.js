import React, { Component } from 'react';
import axios from 'axios'

export default class VisionData extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      hasLoaded: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  getVisionData() {
    return axios.get('/vision')
  }

  handleClick() {
    axios.get("/vision")
      .then(response => {
        console.log(response.data[0].fullTextAnnotation.text)
        this.setState({ text: response.data[0].fullTextAnnotation.text, hasLoaded: true })
      })
  }

  render() {
    return (
      <div className="dataDiv">
        <img onClick={this.handleClick} className="imgExample" src='https://media.npr.org/assets/img/2016/04/17/handwritten-note_wide-941ca37f3638dca912c8b9efda05ee9fefbf3147.jpg?s=1400' alt="A Hand Written Note" />
        {this.state.hasLoaded && <p className="dataPar">{this.state.text}</p>}
      </div>
    )
  }
}