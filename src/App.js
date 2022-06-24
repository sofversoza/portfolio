import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Expertise from './components/Expertise/Expertise'
import Loader from './components/Loader/Loader'
import Footer from './components/Footer/Footer'
import { motion } from 'framer-motion'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div>
      { loading ? (
        <Loader setLoading={setLoading} />
      ) : (
       <>
        <Navbar />
        <Home />
        <Expertise />
        <Projects />
        <Footer />
       </>
      )}
    </div>
  );
}

export default App;
