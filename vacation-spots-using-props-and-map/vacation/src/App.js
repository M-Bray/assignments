import React from "react"

import Vacation from "./Vacation"
import vacationSpots from "./vacationSpots"

function App() {
  const vacationComponents = vacationSpots.map(vacation => <Vacation id={vacation.id} place={vacation.place} price={vacation.price} timeToGo={vacation.timeToGo} />)

  return (
    <div>
      {vacationComponents}
    </div>
  )
    
  
}

export default App