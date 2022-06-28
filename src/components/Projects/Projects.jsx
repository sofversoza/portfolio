import React, { useEffect } from 'react'
import './Projects.css'
import mbm2 from '../../assets/mbm2.mov'
import dreamspace from '../../assets/dreamspace.png'
import Marquee from "react-fast-marquee"
import { AiFillCodeSandboxCircle, AiFillGithub } from 'react-icons/ai'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


function Projects() {
  const animate = useAnimation();
  const {ref, inView} = useInView({
    threshold: 0.2
  });

  useEffect(() => {
    if(inView) {
    animate.start('show')
    }
    if(!inView) {
    animate.start('hidden')
    }
  }, [inView]);

  const marqueeVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1, 
        duration: 1
      }
    }
  }

  const cardVariant = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        delay: 1.5, 
        duration: 2.5
      }
    }
  }

  const hover = { 
    color:'#4351B8',
    scale: 1.1,
    transition: {
      duration: 1.3
    }
  }

  return (
    <div ref={ref} className="projects-cont">
      <div className="marquee-projects-cont">
        <motion.div className="marquee-project"
          variants={marqueeVariant}
          initial='hidden'
          animate={animate}
        >
            <Marquee 
            speed={90}
            gradient={false}
            >
              <span className="title">WEB WORKS &nbsp;</span>
              <span className="title-outline">WEB WORKS &nbsp;</span>
            </Marquee>
        </motion.div>
      </div>
      <div className="flex-cont">
        <motion.div className="card firstProj"
          variants={cardVariant}
          initial='hidden'
          animate={animate}
          whileHover={hover}
        >
          <video className="mbm-vid" src={mbm2} width="590" height="auto" loop autoPlay muted></video>
          <div className="info-cont">
            <p className="project-name">MON BEAU MONDE MUSEUM</p>
            <div className="links-cont">
              <AiFillGithub size="22px" style={{ verticalAlign:'top' }} />&nbsp;&nbsp;
              <AiFillCodeSandboxCircle size="22px" style={{ verticalAlign:'top' }} />
            </div>
          </div>
        </motion.div>
        <motion.div className="card secondProj"
          variants={cardVariant}
          initial='hidden'
          animate={animate}
          whileHover={hover}
        >
          <img className="dreamspace" src={dreamspace} width="590" height="324" />
          <div className="info-cont">
            <p className="project-name">DREAMSPACE</p>
            <div className="links-cont">
              <AiFillGithub size="22px" style={{ verticalAlign:'top' }} />&nbsp;&nbsp;
              <AiFillCodeSandboxCircle size="22px" style={{ verticalAlign:'top' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects