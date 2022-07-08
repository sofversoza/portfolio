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

	const shapeVariant = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 0.5,
				duration: 1.5,
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
				delay: 1,
				duration: 2,
			},
		},
	}

	const svgVariant = {
		hidden: { rotate: -180, opacity: 0 },
		visible: {
			opacity: 1,
			rotate: 0,
			transition: { duration: 2, delay: 1.5 },
		},
	}

	const pathVariant = {
		hidden: {
			opacity: 0,
			pathLength: 0,
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			transition: { duration: 3, delay: 1.5, yoyo: Infinity },
		},
	}

	return (
		<>
			<Navbar />
			<div ref={ref} className='home-cont'>
				<div className='object-cont'>
					<motion.img
						src={object}
						alt='object'
						variants={shapeVariant}
						initial='hidden'
						animate={animate}
					/>
				</div>
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
				<div className='lumi-cont'>
					<motion.div
						className='luminaire'
						variants={lumiVariant}
						initial='hidden'
						animate={animate}
					></motion.div>
				</div>
				<div className='centered-intro'>
					<motion.div className='intro1' variants={introVariant} initial='hidden' animate={animate}>
						<h5 className='about1'>HELLO I'M SOFIA. GREAT SEEING YOU HERE</h5>
						{/* <br /> */}
						<h5 className='about2'>I'M A UI/UX PRODUCT DESIGNER & A</h5>
						<h5 className='about3'>SOFTWARE ENGINEER WITH A FOCUS</h5>
						<h5 className='about4'>ON FRONTEND WEB DEVELOPMENT</h5>
						<h5 className='about5'>I'M A FULLTIME CREATIVE & PASSIONATE ABOUT</h5>
						<h5 className='about6'>THE SMALL DETAILS BOTH IN MY LIFE & WORK</h5>
						<br />
						<h5 className='about7'>BORN IN MANILA — BASED IN PHOENIX</h5>
						<br />
						<h3>
							<BsGlobe
								style={{ verticalAlign: 'top', fill: '#4351B8' }}
								size='1.3em'
								className='globe'
							/>
							&nbsp;AVAILABLE FOR REMOTE PROJECTS
						</h3>
					</motion.div>
				</div>
				<motion.div className='intro' variants={introVariant} initial='hidden' animate={animate}>
					<h5 className='about1'>HELLO I'M SOFIA. GREAT SEEING YOU HERE</h5>
					{/* <br /> */}
					<h5 className='about2'>I'M A UI/UX PRODUCT DESIGNER & A</h5>
					<h5 className='about3'>SOFTWARE ENGINEER WITH A FOCUS</h5>
					<h5 className='about4'>ON FRONTEND WEB DEVELOPMENT</h5>
					<h5 className='about5'>I'M A FULLTIME CREATIVE & PASSIONATE ABOUT</h5>
					<h5 className='about6'>THE SMALL DETAILS BOTH IN MY LIFE & WORK</h5>
					<br />
					<h5 className='about7'>BORN IN MANILA — BASED IN PHOENIX</h5>
					<br />
					<h3>
						<BsGlobe
							style={{ verticalAlign: 'top', fill: '#4351B8' }}
							size='1.3em'
							className='globe'
						/>
						&nbsp;AVAILABLE FOR REMOTE PROJECTS
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
							<span>&nbsp;SOFTWARE ENGINEER</span>
							<span>&nbsp;FRONTEND DEVELOPMENT</span>
							<span>&nbsp;UI/UX & PRODUCT DESIGN</span>
							<span>&nbsp;ART DIRECTION</span>
							<span>&nbsp;CONCEPT & CURATION</span>
						</Marquee>
					</motion.div>
				</div>
			</div>
			<Expertise />
			<Projects />
			<Footer />
		</>
	)
}

export default Home
