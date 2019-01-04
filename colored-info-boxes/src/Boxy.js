import React from "react"

const RandomColorGen = () => {
  const colors = ["#86C2F0", "#FFC300", "#DAF7A6", "#BDF086", "#86F0AC", "#CE86F0", "magenta", "#F086D1", "#F08686"];
  return colors[Math.floor(Math.random() * colors.length)]
}
const RandomColorGenB = () => {
  const colorsB = ["#850202", "#BE5500", "#018E00", "#00858E", "#00048E", "#3E008E", "#6B008E", "#8E0071", "#8E0000"];
  return colorsB[Math.floor(Math.random() * colorsB.length)]
}
const RandomColorGenC = () => {
  const colorsC = ["#850202", "#BE5500", "#018E00", "#00858E", "#00048E", "#3E008E", "#6B008E", "#8E0071", "#8E0000"];
  return colorsC[Math.floor(Math.random() * colorsC.length)]
}
const RandomColorGenD = () => {
  const colorsD = ["#850202", "#BE5500", "#018E00", "#00858E", "#00048E", "#3E008E", "#6B008E", "#8E0071", "#8E0000"];
  return colorsD[Math.floor(Math.random() * colorsD.length)]
}
const Boxy = (props) => {
  let color = RandomColorGen()
  let colorB = RandomColorGenB()
  let colorC = RandomColorGenC()
  let colorD = RandomColorGenD()
  return (
    <div className="boxA"
      style={{
        alignItems: "center",
        boxShadow: "2px 3px 3px 1px",
        padding: "10px",
        display: "flex",
        width: "auto",
        height: "10vh",
        backgroundColor: color,
        border: "1px solid black",
        borderRadius: "2px",
        margin: "10px"
      }}>
      <h1 style={{
        display: "flex",
        fontSize: "22px",
        margin: "auto",
        paddingRight: "20px",
        color: colorB
      }}>{props.job}
      </h1>
      <h3 style={{
        display: "flex",
        margin: "auto",
        color: colorC
      }}>{props.location}
      </h3>
      <p style={{
        display: "flex",
        width: "80vw",
        margin: "auto",
        padding: "30px",
        color: colorD
      }}>{props.summary}
      </p>
      <footer style={{
        display: "flex",
        margin: "auto"
      }} >{props.phone}</footer>
      <footer style={{
        display: "flex",
        margin: "auto",
        paddingRight: "10px"
      }}>{props.email}</footer>
    </div>
  )
}

export default Boxy