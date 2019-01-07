import React from 'react'

class Platform extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      colors: props.colors
    }
    this.handleSmallTime = this.handleSmallTime.bind(this)
    this.handlePartyDj = this.handlePartyDj.bind(this)
  }
  componentDidMount() {
    this.setState({
      
    })
  }
}

export default Platform