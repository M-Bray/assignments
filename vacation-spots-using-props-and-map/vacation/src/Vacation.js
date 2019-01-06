import React from "react"

function Vacation(props) {
  
  return (
    <div>
      <h3>Place: {props.place} </h3>
      <h3>Price: {props.price} </h3>
      <h3>Best Time To Go: {props.timeToGo} </h3>
      <hr/>
    </div>
  )
}

export default Vacation