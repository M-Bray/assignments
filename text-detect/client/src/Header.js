import React from 'react'


const Header = () => {
  return (
    <header className="headerClass">
      <h1 className="titleHeader">Text Detect</h1>
      <h4 className="welcomeHeader"><i>A Picture Says a Thousand Words</i></h4>
      <p className="introPar">
        Here you can identify and extract text from within an image.
      </p>
      <h2 className="introClosingHeader">Give it a Go!</h2>
    </header>
  )
}


export default Header