import React from "react"
import Boxy from "./Boxy"

function App() {
  const jobOpeningA = {job: "Construction", 
  location: "Sacramento, CA.", 
  summary: "Heavy Machinery Operator Needed ASAP", 
  phone: "(916) 669-2125", 
  email: "sacconstruction@work.com"}

  const jobOpeningB = {job: "Pool Cleaner", 
  location: "Roseville, CA.", 
  summary: "Looking for someone to clean my pool", 
  phone: "(916) 369-3455", 
  email: "someone@something.com"}

  const jobOpeningC = {job: "Dishwasher", 
  location: "Rocklin, CA.", 
  summary: "Need someone in the dishpit", 
  phone: "(916) 112-2345", 
  email: "dirtykitchen@clean.com"}

  const jobOpeningD = {job: "Work", 
  location: "Sacramento, CA.", 
  summary: "Heavy Machinery Operator Needed ASAP", 
  phone: "(916) 669-2125", 
  email: "sacconstruction@work.com"}

  const jobOpeningE = {job: "Construction", 
  location: "Sacramento, CA.", 
  summary: "Heavy Machinery Operator Needed ASAP", 
  phone: "(916) 669-2125", 
  email: "sacconstruction@work.com"}

  const jobOpeningF = {job: "Construction", 
  location: "Sacramento, CA.", 
  summary: "Heavy Machinery Operator Needed ASAP", 
  phone: "(916) 669-2125", 
  email: "sacconstruction@work.com"}

  const jobOpeningG = {job: "Construction", 
  location: "Sacramento, CA.", 
  summary: "Heavy Machinery Operator Needed ASAP", 
  phone: "(916) 669-2125", 
  email: "sacconstruction@work.com"}

  const jobOpeningH = {job: "Construction", 
  location: "Sacramento, CA.", 
  summary: "Heavy Machinery Operator Needed ASAP", 
  phone: "(916) 669-2125", 
  email: "sacconstruction@work.com"}

  const jobOpeningI = {job: "Construction", 
  location: "Sacramento, CA.", 
  summary: "Heavy Machinery Operator Needed ASAP", 
  phone: "(916) 669-2125", 
  email: "sacconstruction@work.com"}

  const jobOpeningJ = {job: "Construction", 
  location: "Sacramento, CA.", 
  summary: "Heavy Machinery Operator Needed ASAP", 
  phone: "(916) 669-2125", 
  email: "sacconstruction@work.com"}

  const jobOpeningK = {job: "Construction", 
  location: "Sacramento, CA.", 
  summary: "Heavy Machinery Operator Needed ASAP", 
  phone: "(916) 669-2125", 
  email: "sacconstruction@work.com"}

  return (
    <div>
      <Boxy {...jobOpeningA} />
      <Boxy {...jobOpeningB} />
      <Boxy {...jobOpeningC} />
      <Boxy {...jobOpeningD} />
      <Boxy {...jobOpeningE} />
      <Boxy {...jobOpeningF} />
      <Boxy {...jobOpeningG} />
      <Boxy {...jobOpeningH} />
      <Boxy {...jobOpeningI} />
      <Boxy {...jobOpeningJ} />
      <Boxy {...jobOpeningK} />               
    </div>
  )
}

export default App