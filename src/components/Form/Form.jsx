import React, { useRef, useState } from 'react'
import './Form.css'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { RiMailSendFill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'

const fadeinV = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delay: 0.6, duration: 1.5 },
	},
}

const backdropV = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
}

const modalV = {
	hidden: {
		y: '-100vh',
		opacity: 0,
	},
	visible: {
		y: '30vh',
		opacity: 1,
		transition: { delay: 0.5, duration: 0.7 },
	},
}

function Form() {
	const [showModal, setShowModal] = useState(false)
	const navigate = useNavigate()
	const form = useRef()

	// EMAILJS
	const sendEmail = (e) => {
		e.preventDefault()
		// form.current is all of the the current form inputs
		// and we're able to get those inputs bc of useRef hook
		emailjs.sendForm('gmail', 'portfolio_form', form.current, 'EE8qREoJ2kwjXlpjD').then(
			(result) => {
				setTimeout(() => {
					setShowModal(true)
				}, 1000)
				console.log(result.text)
			},
			(error) => {
				console.log(error.text)
			}
		)
		e.target.reset()
	}

	return (
		<div className='container'>
			<div className='main-page'>
				<h3 onClick={() => navigate('/')}>
					<motion.div whileHover={{ x: -10 }} className='arrowdiv'>
						<MdOutlineArrowBackIos size='1em' style={{ verticalAlign: 'top' }} />
					</motion.div>
					&nbsp;BACK TO HOME
				</h3>
				<motion.h1 variants={fadeinV} initial='hidden' animate='visible'>
					GET IN TOUCH
				</motion.h1>
			</div>
			<motion.div className='wrapper' variants={fadeinV} initial='hidden' animate='visible'>
				<form ref={form} onSubmit={sendEmail}>
					<input placeholder='FULL NAME' type='text' name='user_name' />
					<input placeholder='EMAIL ADDRESS' type='email' name='user_email' />
					<textarea placeholder='TELL ME ABOUT YOUR IDEA' name='message' />
					<motion.input type='submit' value='SEND' whileHover={{ x: 5 }} />
				</form>
			</motion.div>

			<div className='modal-cont'>
				<AnimatePresence exitBeforeEnter>
					{showModal && (
						<motion.div
							className='fade-bg'
							variants={backdropV}
							initial='hidden'
							animate='visible'
							exit='hidden'
						>
							<motion.div className='modal' variants={modalV}>
								<RiMailSendFill size='5.5em' style={{ fill: 'rgb(254, 189, 200, 0.7)' }} />
								<h5>MESSAGE RECEIVED!</h5>
								<h6>I'M HAPPY TO HEAR FROM YOU!</h6>
								<p>
									Thank you for your interest in my work, I'll get back to you as soon as possible.
								</p>
								<Link to='/'>
									<motion.button whileHover={{ x: 7 }} onClick={() => setShowModal(false)}>
										BACK TO HOME
									</motion.button>
								</Link>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default Form
