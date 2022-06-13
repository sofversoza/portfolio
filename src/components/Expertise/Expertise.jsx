import React from 'react'
import './Expertise.css'
import swirl from '../../assets/swirl-pink.png'

function Expertise() {
  return (
    <div className="expertise-cont">
      <div className="expertise">
        <div className="items title">
          <h1>EXPERTISE</h1>
        </div>
        <div className="items text">
          <h2>WEB DESIGN</h2>
          <h2>WEB DEVELOPMENT</h2>
          <h2>ART DIRECTION</h2>
          <h2>BRAND IDENTITY</h2>
          <h2>CONCEPT & CURATION</h2>
          <h2>CREATIVE WRITING</h2>
        </div>
      </div>
      {/* <div className="swirl-cont">
        <img src={swirl} className="swirl" />
      </div> */}
    </div>
  )
}

export default Expertise