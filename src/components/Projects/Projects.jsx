import React from 'react'
import './Projects.css'
import mbmlogo from '../../assets/MonBeauMonde.png'
import mbm from '../../assets/MBM-recording.mov'
import dreamspace from '../../assets/dreamspace.png'
import Marquee from "react-fast-marquee"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


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

        {/* <Parallax pages={4}>
         <ParallaxLayer offset={1} speed={1.5} sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
           <div className='card sticky'>
            <img src={mbmlogo} height="140" width="400"/>
           </div>
          </ParallaxLayer> 

          <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
            <div className="parallax card">
              <video className="mbm-vid grow" src={mbm} width="570" height="auto" loop autoPlay muted>
              </video>
            </div>
          </ParallaxLayer>
        </Parallax> */}
      </div>
    </div>
  )
}

export default Projects