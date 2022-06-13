import React from 'react'
import './Footer.css'
import Marquee from "react-fast-marquee";
import { BsGithub, BsMedium, BsLinkedin, BsArrowUp } from 'react-icons/bs'
import { SiCodesandbox } from 'react-icons/si'

function Footer() {
  return (
    <div className="footer">
        <div className="marquee-work-cont">
            <div className="marquee-work">
            <Marquee 
              speed={90}
              gradient={false}
              >
                <span className="title">WORK WITH ME &nbsp;</span>
                <span className="title-outline">WORK WITH ME &nbsp;</span>
              </Marquee>
            </div>
        </div>

        <div className="social-icons">
          <ul>
            <li>
              <a href="#">
                <BsGithub className='icon' />
              </a>
            </li>
            <li>
              <a href="#">
                <SiCodesandbox className='icon' />
              </a>
            </li>
            <li>
              <a href="#">
                <BsMedium className='icon' />
              </a>
            </li>
            <li>
              <a href="#">
                <BsLinkedin className='icon' />
              </a>
            </li>
          </ul>
        </div>

        <div className="info">
          <h2>
           RESUME
          </h2>
          <h2>
           SEND ME AN EMAIL
          </h2>
        </div>

        <h3 className="copyright">
          © Sofia Versoza — 2022
        </h3>

        <BsArrowUp className="slide-up" />
    </div>
  )
}

export default Footer