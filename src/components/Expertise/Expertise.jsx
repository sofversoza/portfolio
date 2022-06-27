import React, { useEffect } from 'react'
import './Expertise.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Expertise() {
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

  const textContainer = {
    hidden: { x:'100vw' },
    show: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5
      }
    }
  }

  const title = {
    hidden: { x:'-100vw' },
    show: { 
      x: 0,
      transition: { 
        delay: 0.5, 
        duration: 2
      } 
    }
  }
  
  const textItem = {
    hidden: { x: '100vw' },
    show: { x: 0 }
  }
  
  const hover = { 
    color:'#4351B8',
    scale: 1.1,
    transition: {
      duration: 1.3,
      yoyo: 10
    }
  }

  return (
    <div ref={ref} className="expertise-cont">
      <div ref={ref} className="expertise">
        <motion.div className="items title"
          variants={title}
          initial='hidden'
          animate={animate}
        >
          <h1>EXPERTISE</h1>
        </motion.div>
        <motion.div ref={ref} className="items text" 
          variants={textContainer}
          initial='hidden'
          animate={animate}
        >
          <motion.h2 className="expertiselist1" variants={textItem} whileHover={hover}>WEB DESIGN</motion.h2>
          <motion.h2 className="expertiselist2" variants={textItem} whileHover={hover}>WEB DEVELOPMENT</motion.h2>
          <motion.h2 className="expertiselist7" variants={textItem} whileHover={hover}>PRODUCT DESIGN</motion.h2>
          <motion.h2 className="expertiselist3" variants={textItem} whileHover={hover}>ART DIRECTION</motion.h2>
          <motion.h2 className="expertiselist4" variants={textItem} whileHover={hover}>BRAND IDENTITY</motion.h2>
          <motion.h2 className="expertiselist5" variants={textItem} whileHover={hover}>CONCEPT & CURATION</motion.h2>
          <motion.h2 className="expertiselist6" variants={textItem} whileHover={hover}>CREATIVE WRITING</motion.h2>
        </motion.div>
      </div>
    </div>
  )
}

export default Expertise