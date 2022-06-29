import React, { useEffect } from 'react'
import './Home.css'
import object from '../../assets/halfobject.png'
import statue from '../../assets/statphone.png'
import Marquee from 'react-fast-marquee'
import { BsGlobe } from 'react-icons/bs'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '../Navbar/Navbar'
import Expertise from '../Expertise/Expertise'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'

function Home() {
	const animate = useAnimation()
	const { ref, inView } = useInView({
		threshold: 0.2,
	})

	useEffect(() => {
		if (inView) {
			animate.start('show')
		}
		if (!inView) {
			animate.start('hidden')
		}
	}, [inView])

	const lumiVariant = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 3.5,
				duration: 3,
			},
		},
	}

	const statueVariant = {
		hidden: {
			x: '-100vw',
			opacity: 0,
		},
		show: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 1.5,
				duration: 2,
			},
		},
	}

	const introVariant = {
		hidden: { x: '100vw' },
		show: {
			x: 0,
			transition: {
				delay: 1.5,
				duration: 2,
			},
		},
	}

	const marqueeVariant = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 3.5,
				duration: 1.5,
			},
		},
	}

	return (
		<>
			<Navbar />
			<div ref={ref} className='home-cont'>
				<div className='object-cont'>
					<img src={object} alt='object' />
				</div>
				<motion.div
					className='luminaire'
					variants={lumiVariant}
					initial='hidden'
					animate={animate}
				></motion.div>
				<div className='statue-cont'>
					<motion.img
						src={statue}
						alt='object'
						className='statue-img'
						variants={statueVariant}
						initial='hidden'
						animate={animate}
					/>
				</div>
				<motion.div
					className='intro'
					variants={introVariant}
					initial='hidden'
					animate={animate}
				>
					{/* <p>
            I'M SOFIA. NICE TO SEE YOU HERE
            <br />
            I'M A WEB & PRODUCT DESIGNER
            <br />
            FULL STACK SOFTWARE ENGINEER
            <br />
            AND A FULL TIME CREATIVE
            <br />
            BORN IN MNL — BASED IN PHX
            <br />
            <br />
          </p> */}
					<h5 className='about1'>I'M SOFIA. NICE TO SEE YOU HERE</h5>
					<h5 className='about2'>I'M A WEB & PRODUCT DESIGNER</h5>
					<h5 className='about3'>FULL STACK SOFTWARE ENGINEER</h5>
					<h5 className='about4'>AND A FULL TIME CREATIVE</h5>
					<h5 className='about5'>BORN IN MNL — BASED IN PHX</h5>
					<br />
					<h3>
						<BsGlobe
							style={{ verticalAlign: 'top', fill: '#4351B8' }}
							size='1.3em'
							className='globe'
						/>{' '}
						&nbsp;AVAILABLE FOR REMOTE WORK
					</h3>
				</motion.div>
				<div className='marquee-cont'>
					<motion.div
						className='marquee'
						variants={marqueeVariant}
						initial='hidden'
						animate={animate}
					>
						<Marquee speed={80} gradient={false}>
							<span>&nbsp; &nbsp; Full-Stack Development</span>
							<span>&nbsp; &nbsp; Front-End Development</span>
							<span>&nbsp; &nbsp; Web Design</span>
							<span>&nbsp; &nbsp; Art Direction</span>
							<span>&nbsp; &nbsp; Concept & Curation</span>
						</Marquee>
					</motion.div>
					{/* <div className="marquee-cont2">
            <motion.div className="marquee2"
              variants={marqueeVariant}
              initial='hidden'
              animate={animate}
            >
              <Marquee 
              speed={50}
              gradient={false}
              direction={'right'}
              >
                <span>&nbsp; &nbsp; Full-Stack Development</span>
                <span>&nbsp; &nbsp; Front-End Development</span>
                <span>&nbsp; &nbsp; Web Design</span>
                <span>&nbsp; &nbsp; Art Direction</span>
                <span>&nbsp; &nbsp; Concept & Curation</span>
              </Marquee>
            </motion.div>
          </div> */}
				</div>
			</div>
			<Expertise />
			<Projects />
			<Footer />
		</>
	)
}

export default Home
