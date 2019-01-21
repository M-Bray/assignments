import React, { Component } from 'react';
import axios from 'axios'

export default class VisionData extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    }
  }

  getVisionData() {
    return axios.get('/vision')
  }

  componentDidMount() {
    axios.get("/vision")
      .then(response => {
        console.log(response.data[0].fullTextAnnotation.text)
        this.setState({ text: response.data[0].fullTextAnnotation.text })
      })
  }

  render() {
    return (
      <div className="dataDiv">
        <img className="imgExample" src='https://media.npr.org/assets/img/2016/04/17/handwritten-note_wide-941ca37f3638dca912c8b9efda05ee9fefbf3147.jpg?s=1400' />
        <p className="dataPar">{this.state.text}</p>

      </div>
    )
  }
}
