import React from 'react'
import './Loader.css'
import { motion } from 'framer-motion'

function Loader({ setLoading }) {
  const welcomeText = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.5
      }
    }
  }

  const eachWelcome = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const exit = {
    opacity: 0
  }
  
  return (
    // <motion.div className="loader-cont"
    //   variants={welcomeText}
    //   initial='hidden'
    //   animate='visible'
    // >
    //   <motion.h3 variants={eachWelcome} className="texts welcome1">WELCOME</motion.h3>
    //   <motion.h3 variants={eachWelcome} className="texts welcome2">WELCOME</motion.h3>
    //   <motion.h3 variants={eachWelcome} className="texts welcome3">WELCOME</motion.h3>
    //   <motion.h3 variants={eachWelcome} className="texts welcome4">WELCOME</motion.h3>
    //   <motion.h3 variants={eachWelcome} className="texts welcome5">WELCOME</motion.h3>
    // </motion.div>

    <motion.div className="loader-cont"
      variants={welcomeText}
      initial='hidden'
      animate='visible'
    >
      <motion.span variants={eachWelcome} className="welcome1">W</motion.span>
      <motion.span variants={eachWelcome} className="welcome1">E</motion.span>
      <motion.span variants={eachWelcome} className="welcome1">L</motion.span>
      <motion.span variants={eachWelcome} className="welcome1">C</motion.span>
      <motion.span variants={eachWelcome} className="welcome1">O</motion.span>
      <motion.span variants={eachWelcome} className="welcome1">M</motion.span>
      <motion.span variants={eachWelcome} className="welcome1">E</motion.span>
    </motion.div>

  )
}

export default Loader