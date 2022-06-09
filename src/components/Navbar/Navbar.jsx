import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <h1 className="logo">
            SOFIA VERSOZA
            {/* <br />
            VERSOZA */}
        </h1>

        <div className="envelope-cont">
            <div className="envelope">
            <div className="top">
                <div className="outer">
                    <div className="inner"></div>
                </div>
            </div> 
                <div className="bottom"></div>
                <div className="left"></div>
                <div className="right"></div>
                <div className="letter">
                    <div className="email" href="mailto:sofversoza@gmail.com">
                        sofversoza
                        <br />
                        @gmail.com
                    </div>
                </div>  
            </div>
        </div>
    </div> 
  )
}

export default Navbar