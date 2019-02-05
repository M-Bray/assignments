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
        <img onClick={this.handleLabelClick} className="img-example" src="https://i.pinimg.com/originals/f9/ca/af/f9caaf61928068c980caa33ba3d28f27.jpg" alt="kundilini meditation" />
        <div>{this.state.labels.map(label => {
          return (
            <div>
              {this.state.hasLoaded && <p className="data-par"> {Math.floor(label.score * 100)} - {label.description}</p>}
            </div>
          )
        })}
        </div>

      </div>
    )
  }
}