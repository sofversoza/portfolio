import React from 'react'
import './Expertise.css'
import swirl from '../../assets/swirl-pink.png'

function Expertise() {
  
  return (
    <div className="container">
      <div className="expertise">
        <div className="expertise-col">
          <h1>EXPERTISE</h1>
        </div>
        <div className="expertise-text">
          <h2>WEB DESIGN</h2>
          <h2>WEB DEVELOPMENT</h2>
          <h2>ART DIRECTION</h2>
          <h2>BRAND IDENTITY</h2>
          <h2>CONCEPT & CURATION</h2>
          <h2>CREATIVE WRITING</h2>
        </div>
      </div>
      <div>
        <img src={swirl} className="swirl" />
      </div>
    </div>
  )
}

export default Expertise