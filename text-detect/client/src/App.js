import React from 'react';

import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import VisionData from './VisionData'

const App = () => {
  return (
    <div className="siteWrap">
      <Nav />
      <Header />
      <VisionData />
      <Footer />
    </div>
  )
}

export default App