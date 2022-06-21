import React, { useEffect } from 'react'
import './Navbar.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Navbar() {
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

  const nameVariant = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        delay:1.5, 
        duration:3,
        easing: 'easeInOut'
      }
    }
  }

  const envelopeVariant = {
    hidden: { x: '-100vw' },
    show: {
      x: 0,
      transition: {
        delay: 1, 
        type: 'spring', 
        stiffness: 65
      }
    }
  }

  return (
    <div className="navbar home">
        <motion.div ref={ref} className="name-cont"
          variants={nameVariant}
          initial='hidden'
          animate={animate}
        >
          <p className="name name1">SOFIA VERSOZA</p>
          <p className="name name2">SOFIA VERSOZA</p>
        </motion.div>
        <motion.div className="envelope-cont"
          variants={envelopeVariant}
          initial='hidden'
          animate='show'
        >
          <motion.div class="envelope"
            drag
            dragConstraints={{ left: 0, top: 0, right:0, bottom: 0 }}
            dragElastic={1}
          >
            <div class="back"></div>
            <div class="letter">
              <div class="text1">CONTACT<span>@</span></div>
              <div class="text2">SOFIAVERSOZA</div>
              <div class="text3">.COM</div>
            </div>
            <div class="front"></div>
            <div class="top"></div>
          </motion.div>
        </motion.div>
    </div> 
  )
}

export default Navbar