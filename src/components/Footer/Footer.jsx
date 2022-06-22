import React, { useEffect } from 'react'
import './Footer.css'
import Marquee from "react-fast-marquee";
import { BsGithub, BsMedium, BsLinkedin, BsArrowUp } from 'react-icons/bs'
import { SiCodesandbox } from 'react-icons/si'
import { Link } from 'react-scroll'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Footer() {
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
        delay: 0.5, 
        duration: 1.5
      }
    }
  }

  const socialsVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5, 
        duration: 2,
        when: 'beforeChildren',
        staggerChildren: 0.5
      }
    }
  }

  const socialVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const infoVariant = {
    hidden: { x:'100vh' },
    show: {
      x: 0,
      transition: {
        delay: 1, 
        duration: 2,
        when: 'beforeChildren',
        staggerChildren: 0.5
      }
    }
  }

  const eachInfoVariant = {
    hidden: { x:'100vh' },
    show: { x: 0 },
    hover: {
      color:'#4351B8',
      scale: 1.1,
      transition: {
        duration: 1.3,
        yoyo: 10
      }
    }
  }

  return (
    <div className="footer">
        <div ref={ref} className="marquee-work-cont">
            <motion.div className="marquee-work"
              variants={marqueeVariant}
              initial='hidden'
              animate={animate}
            >
            <Marquee 
              speed={90}
              gradient={false}
              >
                <span className="title">WORK WITH ME &nbsp;</span>
                <span className="title-outline">WORK WITH ME &nbsp;</span>
              </Marquee>
            </motion.div>
        </div>

        <div ref={ref} className="social-icons">
          <motion.ul
            variants={socialsVariant}
            initial='hidden'
            animate={animate}
          >
            <motion.li variants={socialVariant}>
              <a href="https://github.com/sofversoza" target="_blank">
                <BsGithub className='icon' />
              </a>
            </motion.li>
            <motion.li variants={socialVariant}>
              <a href="https://codesandbox.io/u/sofversoza" target="_blank">
                <SiCodesandbox className='icon' />
              </a>
            </motion.li>
            <motion.li variants={socialVariant}>
              <a href="https://medium.com/@sofversoza" target="_blank">
                <BsMedium className='icon' />
              </a>
            </motion.li>
            <motion.li variants={socialVariant}>
              <a href="https://www.linkedin.com/in/sofiaversoza/" target="_blank">
                <BsLinkedin className='icon' />
              </a>
            </motion.li>
          </motion.ul>
        </div>
        <motion.div className="info"
          variants={infoVariant}
          initial='hidden'
          animate={animate}
        >
          <motion.h2 variants={eachInfoVariant} whileHover='hover'>RESUME</motion.h2>
          <motion.h2 variants={eachInfoVariant} whileHover='hover'>CONTACT ME</motion.h2>
        </motion.div>
        <h3 className="copyright">
          © Sofia Versoza — 2022
        </h3>
        <Link to='home'smooth={true} duration={1000}>
          <BsArrowUp className="slide-up" />
        </Link>
    </div>
  )
}

export default Footer