import React from 'react';

import Nav from './Nav'
import Footer from './Footer'
import VisionData from './VisionData'

const App = () => {
  return (
    <div className="siteWrap">
      <Nav />
      <VisionData />
      <Footer />
    </div>
  )
}

export default App