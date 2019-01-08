import React from "react"

function Cards(props) {
  return (
    <div id="cardWrap">  
        <img src={props.image} style={{
          width: "18vw"
        }}>
        </img>
        <h3> <span style={{textDecoration: "underline"}}>Destination:</span> {props.place} </h3>
        <h3>Price: ${props.price} </h3>
        <h3>Best Time To Go: {props.timeToGo} </h3>
        <footer>{props.budget}</footer>
    </div>
  )
}

export default Cards