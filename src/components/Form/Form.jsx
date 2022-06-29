import React, { useRef } from 'react'
import './Form.css'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Routes, Route, useNavigate } from 'react-router-dom'

function Form() {
	const navigate = useNavigate()
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		// form.current is all of the the current form inputs
		// and we're able to get those inputs bc of useRef hook
		emailjs
			.sendForm('gmail', 'portfolio_form', form.current, 'EE8qREoJ2kwjXlpjD')
			.then(
				(result) => {
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
						<MdOutlineArrowBackIos
							size='1em'
							style={{ verticalAlign: 'top' }}
						/>
					</motion.div>
					&nbsp;BACK TO MAIN
				</h3>
        <h1>GET IN TOUCH</h1>
			</div>
			<div className='wrapper'>
				<form ref={form} onSubmit={sendEmail}>
					<input placeholder='FULL NAME' type='text' name='user_name' />
					<input placeholder='EMAIL ADDRESS' type='email' name='user_email' />
					<textarea placeholder='TELL ME ABOUT YOUR IDEA' name='message' />
					<motion.input type='submit' value='SEND' whileHover={{ x: 5 }} />
				</form>
			</div>
		</div>
	)
}

export default Form
