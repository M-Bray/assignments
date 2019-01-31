import React from 'react'

function Header() {
  return (
    <div className="header-wrap">
      <h1 className="title-header" id="no-filter">Photo Bomb</h1>
      <h4 className="welcome-header" id="no-filter"><i>A Picture Says a Thousand Words</i></h4>
      <p className="intro-par" id="no-filter">
        Here you can reveal hidden secrets from within an image.
      </p>
      <h2 className="header-exit" id="no-filter">Give it a Go!</h2>
    </div>
  )
}

export default Header