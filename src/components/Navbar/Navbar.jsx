import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="name-cont">
            <p className="name name1">SOFIA VERSOZA</p>
            <p className="name name2">SOFIA VERSOZA</p>
        </div>
        <div className="envelope-cont">
            <div class="envelope">
              <div class="back"></div>
              <div class="letter">
                <div class="text1">SOFVERSOZA</div>
                <div class="text2">@GMAIL.COM</div>
                <div class="text3">٩(˘◡˘)۶</div>
              </div>
              <div class="front"></div>
              <div class="top"></div>
            </div>
        </div>
    </div> 
  )
}

export default Navbar