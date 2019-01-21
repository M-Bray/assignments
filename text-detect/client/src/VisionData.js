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
        <p className="dataPar">{this.state.text}</p>
      </div>
    )
  }
}
