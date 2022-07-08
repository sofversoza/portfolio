import React, { useEffect } from 'react'
import './Footer.css'
import Marquee from 'react-fast-marquee'
import { BsGithub, BsMedium, BsLinkedin, BsArrowUp } from 'react-icons/bs'
import { SiCodesandbox } from 'react-icons/si'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-scroll'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'

function Footer() {
	const navigate = useNavigate()
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

	const marqueeVariant = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 0.5,
				duration: 1.5,
			},
		},
	}

	const socialsVariant = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 0.5,
				duration: 2,
				when: 'beforeChildren',
				staggerChildren: 0.5,
			},
		},
	}

	const socialVariant = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	}

	const ideaVariant = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 0.5,
				duration: 3,
			},
		},
	}

	return (
		<div className='footer links'>
			<div ref={ref} className='marquee-work-cont'>
				<motion.div
					className='marquee-work'
					variants={marqueeVariant}
					initial='hidden'
					animate={animate}
				>
					<Marquee speed={90} gradient={false}>
						<span className='title'>WORK WITH ME &nbsp;</span>
						<span className='title-outline'>WORK WITH ME &nbsp;</span>
					</Marquee>
				</motion.div>
			</div>
			<motion.div className='idea' variants={ideaVariant} initial='hidden' animate={animate}>
				<h2>HAVE AN IDEA?</h2>
				<h3 onClick={() => navigate('/form')}>
					HIRE ME
					<motion.div whileHover={{ x: 10 }} className='arrowdiv'>
						<MdOutlineArrowForwardIos size='1em' style={{ verticalAlign: 'top' }} />
					</motion.div>
				</h3>
			</motion.div>
			<div ref={ref} className='social-icons'>
				<motion.ul variants={socialsVariant} initial='hidden' animate={animate}>
					<motion.li variants={socialVariant}>
						<a href='https://github.com/sofversoza' target='_blank'>
							<BsGithub className='icon' />
						</a>
					</motion.li>
					<motion.li variants={socialVariant}>
						<a href='https://codesandbox.io/u/sofversoza' target='_blank'>
							<SiCodesandbox className='icon' />
						</a>
					</motion.li>
					<motion.li variants={socialVariant}>
						<a href='https://medium.com/@sofversoza' target='_blank'>
							<BsMedium className='icon' />
						</a>
					</motion.li>
					<motion.li variants={socialVariant}>
						<a href='https://www.linkedin.com/in/sofiaversoza/' target='_blank'>
							<BsLinkedin className='icon' />
						</a>
					</motion.li>
				</motion.ul>
			</div>
			<div className='bottom-info-flex'>
				<motion.h3 className='copyright' whileHover={{ color: 'rgb(254, 189, 200, 0.7)' }}>
					<span>©</span> SOFIA VERSOZA — 2022
				</motion.h3>
				<Link to='home' smooth={true} duration={1000}>
					<motion.p whileHover={{ scale: 1.5, transition: { duration: 1 } }}>
						<BsArrowUp className='slide-up' />
					</motion.p>
				</Link>
			</div>
		</div>
	)
}

export default Footer
