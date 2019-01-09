import React from "react"

function Cards(props) {
  return (
    <div className="cardWrap">  
        <img src={props.image} alt="" style={{
          width: "18vw"
        }}>
        </img>
        <h3> 
          <span style={{
            color: "black",
            textDecoration: "underline"}}>Destination:
          </span> {props.place} 
        </h3>
        <h3>
          <span style={{
            color: "black", 
            textDecoration: "underline"}}>Price: $
          </span>{props.price} 
        </h3>
        <h3>
          <span style={{
            color: "black",
            textDecoration: "underline"}}>Best Time To Go: 
          </span>{props.timeToGo} 
        </h3>
        <footer id="budget">{props.budget}</footer>
    </div>
  )
}

export default Cards