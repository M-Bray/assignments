import React, { Component } from 'react';
import axios from 'axios'

export default class VisionData extends Component {
  constructor(){
    super();
    this.state = {
      data: {}
    }
  }

  getVisionData(){
    axios.get('/vision')
  }
  componentDidMount(){
    // make your api request and set state
    this.getVisionData()
  }

  render() {
    return (
      <div className="dataDiv">
        
      </div>
    )
  }
}
