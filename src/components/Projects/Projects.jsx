import React from 'react'
import './Projects.css'
import mbm from '../../assets/MBM-recording.mov'
import dreamspace from '../../assets/dreamspace.png'
import Marquee from "react-fast-marquee";

function Projects() {

  return (
    <div className="web-works">
      <div className="marquee-projects">
          <div className="marquee-proj">
              <Marquee 
              speed={90}
              gradient={false}
              >
                <span className="title">WEB WORKS &nbsp;</span>
                <span className="title-outline">WEB WORKS &nbsp;</span>
              </Marquee>
          </div>
      </div>
      
      <div className="projects">
        <div>
          <video className="mbm-vid grow" src={mbm} width="650" height="auto" loop autoPlay muted>
          </video>
        </div>
        <br />
        <div>
          <img className="dreamspace grow" src={dreamspace} width="650" height="auto" />
        </div>
      </div>
      
    </div>
  )
}

export default Projects