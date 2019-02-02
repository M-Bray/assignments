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
      <div className="data-div">
        <img onClick={this.handleClick} className="img-example" src='https://i.ytimg.com/vi/1OTP7rEPjn4/maxresdefault.jpg' alt="Eagle snacking on a baby cheetah" />
        {this.state.hasLoaded && <p className="data-par">{this.state.text}</p>}
      </div>
    )
  }
}