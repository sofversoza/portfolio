import React from 'react'
import './Projects.css'
import mbm from '../../assets/MBM-recording.mov'
import dreamspace from '../../assets/dreamspace.png'
import Marquee from "react-fast-marquee";

function Projects() {
  return (
    <div className="projects-cont">
      <div className="web-works">
        <div className="marquee-projects-cont">
            <div className="marquee-project">
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
          <div className="proj-item item-1">
            <video className="mbm-vid grow" src={mbm} width="570" height="auto" loop autoPlay muted>
            </video>
          </div>

          <div className="proj-item item-2">
            <img className="dreamspace grow" src={dreamspace} width="570" height="305" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects