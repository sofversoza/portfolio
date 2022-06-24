import React from 'react'
import './Projects.css'
import mbmlogo from '../../assets/MonBeauMonde.png'
import mbm from '../../assets/MBM-recording.mov'
import mbm2 from '../../assets/mbm2.mov'
import dreamspace from '../../assets/dreamspace.png'
import Marquee from "react-fast-marquee"
import { AiFillCodeSandboxCircle, AiFillGithub } from 'react-icons/ai'


function Projects() {
  return (
    <div className="projects-cont">
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
      <div className="flex-cont">
        <div className="card firstProj">
          <video className="mbm-vid" src={mbm2} width="590" height="auto" loop autoPlay muted></video>
          <div className="info-cont">
            <p className="project-name">MON BEAU MONDE MUSEUM</p>
            <div className="links-cont">
              <AiFillGithub size="22px" style={{ verticalAlign:'top' }} />&nbsp;&nbsp;
              <AiFillCodeSandboxCircle size="22px" style={{ verticalAlign:'top' }} />
            </div>
          </div>
        </div>
        <div className="card secondProj">
          <img className="dreamspace" src={dreamspace} width="590" height="324" />
          <div className="info-cont">
            <p className="project-name">DREAMSPACE</p>
            <div className="links-cont">
              <AiFillGithub size="22px" style={{ verticalAlign:'top' }} />&nbsp;&nbsp;
              <AiFillCodeSandboxCircle size="22px" style={{ verticalAlign:'top' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects