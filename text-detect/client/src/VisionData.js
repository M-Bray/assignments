import React, { Component } from 'react';
import axios from 'axios'

export default class VisionData extends Component {
  constructor(){
    super();
    this.state = {
      data: axios
    }
  }

  getVisionData(){
    return  axios.get('/vision')
  }

  componentDidMount(){
    this.setState({data: this.getVisionData()}) 
    // make api request 
    //settate
    
  }

  render() {
    return (
      <div className="dataDiv">
        <div> </div>
      </div>
    )
  }
}
