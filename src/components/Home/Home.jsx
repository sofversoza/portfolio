import React from 'react'
import './Home.css'
import object from '../../assets/halfobject.png'
import statue from '../../assets/statphone.png'
import Marquee from "react-fast-marquee";
import { BsGlobe } from 'react-icons/bs'

function Home() {
  return (
    <div className="home-cont">
        <div className="object-cont appear">
            <img src={object} alt="object" />
        </div>
        <div className="statue-cont">
            <img src={statue} alt="object" className='statue-img'/>
        </div>
        <div className="intro">
            <p>
                I'M SOFIA. NICE TO SEE YOU HERE
                <br />
                WEB DESIGNER & FULL-TIME CREATIVE
                <br />
                BORN IN MNL — BASED IN PHX
                <br />
                <br />
            </p>                
            <h3>
                <BsGlobe style={{verticalAlign:'top', fill:'#4351B8'}} size="1.3vw" /> &nbsp;AVAILABLE FOR REMOTE WORK
            </h3>
        </div>
        <div className="marquee-cont">
            <div className="marquee">
                <Marquee 
                speed={80}
                gradient={false}
                >
                    <span>&nbsp; &nbsp; Full-Stack Development</span>
                    <span>&nbsp; &nbsp; Front-End Development</span>
                    <span>&nbsp; &nbsp; Web Design</span>
                    <span>&nbsp; &nbsp; Art Direction</span>
                    <span>&nbsp; &nbsp; Concept & Curation</span>
                </Marquee>
            </div>
        </div>
    </div>  
  )
}

export default Home