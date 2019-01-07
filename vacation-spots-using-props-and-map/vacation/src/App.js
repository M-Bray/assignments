import React from "react"

import Vacation from "./Cards"
import vacationSpots from "./vacationSpots"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


function App() {
  const vacationComponents = vacationSpots.map(vacation => <Vacation key={vacation.id} place={vacation.place} price={vacation.price} timeToGo={vacation.timeToGo} budget={vacation.budget}/>)

  return (
    <div style={{
      paddingTop: "20px",
      width: "100vw",
      height: "100vh",
      backgroundColor: "#C7F0F0",
    }}>
      {vacationComponents}
    </div>
  )
    
  
}

export default App