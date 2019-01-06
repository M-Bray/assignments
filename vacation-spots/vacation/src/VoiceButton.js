import React from 'react'

// *******PAGE STYLE*******

const divStyle = {
  margin: "auto",
  paddingTop: "80px",
  width:"100vw",
  height: "100vh",
  backgroundColor: "blue",
  opacity: ".4"

}
const inputStyle = {
  fontSize: "44px",
  backgroundColor: "cornsilk",
  borderRadius: "2px"
}

const buttonStyle = {
  margin: "5px",
  fontSize: "44px",
  backgroundColor: "whitesmoke",
  borderRadius: "2px",
  boxShadow: "1px 1px 2px 3px"
}

////////////////////////////////////////////////

const VoiceButton = (props) => {
  return (
    <div style={divStyle}>
      <input style={inputStyle} onChange={props.onType} id="speakBox" value={props.userInput}></input>
      <button style={buttonStyle} onClick={props.buttonClick}>SPEAK</button>      
    </div>
  )
}


export default VoiceButton

