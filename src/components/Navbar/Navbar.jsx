import React, { useEffect } from 'react'
import './Navbar.css'
import { motion, useAnimation } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
// import { useInView } from 'react-intersection-observer'

function Navbar() {
	const navigate = useNavigate()
	const animate = useAnimation()
	// const { ref, inView } = useInView({
	// 	threshold: 0.2,
	// })

	// useEffect(() => {
	// 	if (inView) {
	// 		animate.start('show')
	// 	}
	// 	if (!inView) {
	// 		animate.start('hidden')
	// 	}
	// }, [inView])

	const nameVariant = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 1,
				duration: 2.5,
			},
		},
	}

	const navVariant = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 1.5,
				when: 'beforeChildren',
				staggerChildren: 0.5,
			},
		},
	}

	const eachNav = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	}

	const svgVariant = {
		hidden: { rotate: -180, opacity: 0 },
		visible: {
			opacity: 1,
			rotate: 0,
			transition: { duration: 2, delay: 1 },
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
			transition: { duration: 3, delay: 1, yoyo: Infinity },
		},
	}

	return (
		<div className='navbar home'>
			<motion.div className='logo-cont' variants={nameVariant} initial='hidden' animate='show'>
				<p className='name'>SOFIA VERSOZA</p>
				<motion.svg
					className='svg-logo'
					viewBox='0 0 249 210'
					fill='none'
					xmlns='http://www.w3.org/2000/motion.svg'
					variants={svgVariant}
					initial='hidden'
					animate='visible'
				>
					<g id='logoname'>
						<path
							id='SV'
							d='M85.68 85.816C82.32 83.32 80.88 79.864 80.88 76.6C80.88 74.968 81.264 73.432 81.84 71.992C83.76 67.768 88.08 65.176 92.784 65.176H99.696C104.208 65.464 110.736 67.096 112.272 76.408L119.088 63.544H90.96C88.176 63.544 85.488 64.024 82.992 64.888C82.8 64.984 82.704 64.984 82.704 65.08C74.832 68.44 69.936 75.352 69.936 82.552C69.936 87.928 72.624 93.592 78.96 98.104L104.304 114.232C109.488 117.208 112.848 122.392 112.848 128.44C112.848 130.744 112.368 133.24 111.216 135.736C108.432 141.976 102.192 144.952 97.296 145.144H96.336C90.48 145.144 84.912 141.976 82.608 136.504C81.456 133.72 81.072 131.032 81.072 128.632C81.072 125.08 81.936 122.104 82.608 120.472L70.032 127.384C73.392 138.328 81.648 146.872 94.896 146.872C107.952 146.872 114.384 141.304 118.224 134.968C120.624 131.128 121.872 126.616 121.872 122.2C121.872 115.48 118.992 108.664 112.848 104.056L85.68 85.816ZM164.883 63.544C162.579 63.64 158.163 65.176 158.163 70.072V70.36C158.259 72.664 159.987 75.544 162.291 79.096C165.651 84.472 169.683 91 169.683 97.816C169.683 98.968 169.587 100.12 169.299 101.272L160.371 140.632L144.531 68.824C144.435 68.44 144.435 68.152 144.435 67.768C144.435 66.04 145.395 64.312 147.027 63.544H125.811C128.403 64.6 130.419 66.904 130.995 69.688L147.987 146.2H161.619C161.523 145.624 161.427 145.048 161.427 144.472C161.427 143.896 161.523 143.32 161.619 142.744L170.931 101.752V101.656L178.035 69.976C178.707 67 180.915 64.6 183.795 63.544H164.883ZM170.931 93.976C169.779 88.12 166.419 82.648 163.731 78.232C161.619 74.968 159.891 72.088 159.795 70.36V70.072C159.795 65.56 164.691 65.176 164.883 65.176H173.139C175.059 65.176 176.595 66.712 176.595 68.632C176.595 68.92 176.595 69.112 176.499 69.4L170.931 93.976Z'
							fill='#F5F5F5'
						/>
						<motion.circle
							id='circle'
							cx='125'
							cy='105'
							r='95.7214'
							stroke='#F5F5F5'
							stroke-width='0.557178'
							variants={pathVariant}
						/>
					</g>
				</motion.svg>
			</motion.div>
			<motion.div className='sm-name' variants={nameVariant} initial='hidden' animate='show'>
				<p>SOFIA VERSOZA</p>
			</motion.div>

			<div className='links-cont'>
				<motion.ul variants={navVariant} initial='hidden' animate='show'>
					<Link to='expertise' smooth={true} duration={1000}>
						<motion.li whileHover={{ x: 10 }} variants={eachNav}>
							<p>EXPERTISE</p>
						</motion.li>
					</Link>
					<Link to='projects' smooth={true} duration={1000}>
						<motion.li whileHover={{ x: 10 }} variants={eachNav}>
							<p>PROJECTS</p>
						</motion.li>
					</Link>
					<Link to='links' smooth={true} duration={1000}>
						<motion.li whileHover={{ x: 10 }} variants={eachNav}>
							<p>LINKS</p>
						</motion.li>
					</Link>
					<Link to='expertise' smooth={true} duration={1000}>
						<motion.li whileHover={{ x: 10 }} variants={eachNav}>
							<p onClick={() => navigate('/form')}>SEND ME A MESSAGE</p>
						</motion.li>
					</Link>
				</motion.ul>
			</div>
		</div>
	)
}

export default Navbar
