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
				duration: 4,
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
			transition: { duration: 4, delay: 1.7, yoyo: Infinity },
		},
	}

	return (
		<div className='navbar home'>
			<motion.div className='logo-cont' variants={nameVariant} initial='hidden' animate='show'>
				<p className='name'>SOFIA VERSOZA</p>
				<motion.svg
					className='svg-logo'
					viewBox='0 0 417 401'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					variants={svgVariant}
					initial='hidden'
					animate='visible'
				>
					<g id='squigs' clip-path='url(#clip0_2_2)'>
						<motion.path
							id='star'
							d='M236.598 25.2739L253.413 67.8653C259.224 82.5862 275.377 90.3649 290.51 85.7303L334.293 72.3212C359.561 64.5824 381.251 91.7809 368.084 114.694L345.268 154.395C337.382 168.117 341.372 185.596 354.43 194.537L392.212 220.408C414.017 235.338 406.276 269.254 380.152 273.245L334.887 280.161C319.242 282.551 308.064 296.568 309.215 312.353L312.546 358.022C314.468 384.378 283.125 399.472 263.716 381.537L230.087 350.459C218.464 339.717 200.536 339.717 188.913 350.459L155.284 381.536C135.875 399.472 104.532 384.378 106.454 358.022L109.785 312.353C110.936 296.568 99.7576 282.551 84.1126 280.161L38.8476 273.245C12.7239 269.254 4.98277 235.338 26.7877 220.408L64.5696 194.537C77.6282 185.596 81.6176 168.117 73.7318 154.395L50.9163 114.694C37.7488 91.7809 59.4389 64.5824 84.7072 72.3212L128.49 85.7303C143.623 90.3649 159.776 82.5861 165.587 67.8652L182.402 25.2739C192.106 0.693302 226.894 0.693298 236.598 25.2739Z'
							stroke='pink'
							stroke-width='1.5'
							variants={pathVariant}
							initial='hidden'
							animate='visible'
						/>
						<path
							id='font'
							d='M152.7 176.94C147.8 173.3 145.7 168.26 145.7 163.5C145.7 161.12 146.26 158.88 147.1 156.78C149.9 150.62 156.2 146.84 163.06 146.84H173.14C179.72 147.26 189.24 149.64 191.48 163.22L201.42 144.46H160.4C156.34 144.46 152.42 145.16 148.78 146.42C148.5 146.56 148.36 146.56 148.36 146.7C136.88 151.6 129.74 161.68 129.74 172.18C129.74 180.02 133.66 188.28 142.9 194.86L179.86 218.38C187.42 222.72 192.32 230.28 192.32 239.1C192.32 242.46 191.62 246.1 189.94 249.74C185.88 258.84 176.78 263.18 169.64 263.46H168.24C159.7 263.46 151.58 258.84 148.22 250.86C146.54 246.8 145.98 242.88 145.98 239.38C145.98 234.2 147.24 229.86 148.22 227.48L129.88 237.56C134.78 253.52 146.82 265.98 166.14 265.98C185.18 265.98 194.56 257.86 200.16 248.62C203.66 243.02 205.48 236.44 205.48 230C205.48 220.2 201.28 210.26 192.32 203.54L152.7 176.94ZM268.204 144.46C264.844 144.6 258.404 146.84 258.404 153.98V154.4C258.544 157.76 261.064 161.96 264.424 167.14C269.324 174.98 275.204 184.5 275.204 194.44C275.204 196.12 275.064 197.8 274.644 199.48L261.624 256.88L238.524 152.16C238.384 151.6 238.384 151.18 238.384 150.62C238.384 148.1 239.784 145.58 242.164 144.46H211.224C215.004 146 217.944 149.36 218.784 153.42L243.564 265H263.444C263.304 264.16 263.164 263.32 263.164 262.48C263.164 261.64 263.304 260.8 263.444 259.96L277.024 200.18V200.04L287.384 153.84C288.364 149.5 291.584 146 295.784 144.46H268.204ZM277.024 188.84C275.344 180.3 270.444 172.32 266.524 165.88C263.444 161.12 260.924 156.92 260.784 154.4V153.98C260.784 147.4 267.924 146.84 268.204 146.84H280.244C283.044 146.84 285.284 149.08 285.284 151.88C285.284 152.3 285.284 152.58 285.144 153L277.024 188.84Z'
							fill='white'
						/>
					</g>
				</motion.svg>
			</motion.div>

			<motion.div className='sm-name' variants={nameVariant} initial='hidden' animate='show'>
				<p>SOFIA VERSOZA</p>
			</motion.div>

			<div className='navlinks-cont'>
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
