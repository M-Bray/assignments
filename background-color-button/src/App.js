import React from 'react'
import Button, { OKButton, XButton } from "./Button"


function App() {
  return (
    <div>
      <Button>
        Default
      </Button>
      <OKButton>
        OK
      </OKButton>
      <XButton>
        X
      </XButton>
    </div>
  )
}

export default App
