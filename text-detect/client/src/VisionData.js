import React, { Component } from 'react';
import axios from 'axios'

export default class VisionData extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      labels: [],
      hasLoaded: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleLabelClick = this.handleLabelClick.bind(this)
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
    
    handleLabelClick() {
      axios.get("/labels")
      .then(response => {
        console.log(response.data[0].labelAnnotations)
        const labels = response.data[0].labelAnnotations
        const hasLoaded = true
        this.setState({ labels, hasLoaded })
      })
}

  render() {
    return (
      <div className="data-div">
        <img onClick={this.handleLabelClick} className="img-example" src="https://media.npr.org/assets/img/2016/04/17/handwritten-note_wide-941ca37f3638dca912c8b9efda05ee9fefbf3147.jpg?s=1400" alt="handwritten note" />
        {this.state.hasLoaded && <p className="data-par"></p>}
        <div>{this.state.labels.map(label => {
          return (
            <div>
              {label.description}
            </div>
          )
          })}
        </div>

      </div>
    )
  }
}