import React from 'react'
import Header from './Header'

function Home() {
  return (
    <div className="home-wrap">
      <Header />
      <header className="home-header">
        <h1>Mikki's Restaurant</h1>
      </header>
      <p className="home-p">
        Here will be the Vibe Style and Atmoshpere of the Restaurant
      </p>
      <footer className="home-footer">Home page footer</footer>
    </div>
  )
}

export default Home