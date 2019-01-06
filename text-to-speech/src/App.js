import VoiceButton from './VoiceButton'
import React, { Component } from 'react'
 
 export default class App extends Component {
   constructor(props) {
     super(props)
     this.state = {
       input: "" 
     }

     this.onChangeHandler = this.onChangeHandler.bind(this)
     this.buttonClickHandler = this.buttonClickHandler.bind(this)
   }

   buttonClickHandler() {
    let msg = new SpeechSynthesisUtterance(this.state.input)
    speechSynthesis.speak(msg)
   
  }
   onChangeHandler(e) {
     this.setState({
       input: e.target.value
     })
   }

   render() {
     return (
      <div style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        backgroundColor: "maroon",
        textAlign: "center"   
      }}>

       <VoiceButton 
       userInput = {this.state.input}
       onType = {this.onChangeHandler}
       buttonClick = {this.buttonClickHandler} /> 
      </div> 
    )
  }
}

  console.log("hello")
