import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Routes, Route, Navigate } from 'react-router-dom'

function Form() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   // form.current is the all the current form inputs,
  //   // and we're able to get those inputs bc of useRef hook
  //   emailjs.sendForm('gmail', 'portfolio_form', form.current, 'EE8qREoJ2kwjXlpjD')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset();
  // };

  return (
    <div>
      {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
    This is the form
    <h3>Hi</h3>
    <h4>Welcome
    Home
    </h4>
    </div>
  )
}

export default Form