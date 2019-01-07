import React from "react"

function Cards(props) {
  
  return (
    <div style={{
      margin: "15px",
      backgroundColor: "#F0F0C7",
      }}>
      <div style={{
        textAlign: "center",
        width: "28vw",
        backgroundColor: "#F0C7F0"
      }} >
        <hr/>
        <h3> <span style={{textDecoration: "underline"}}>Destination:</span> {props.place} </h3>
        <h3>Price: ${props.price} </h3>
        <h3>Best Time To Go: {props.timeToGo} </h3>
        <footer>{props.budget}</footer>
        <hr/>
      </div>
    </div>
  )
}

export default Cards