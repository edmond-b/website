import React from 'react'
import '../App.css'
import { Button } from '../components/Button'

function Contact() {
  return (
    <>
    <section className='footer-subscription'>
      <h2>Proof of Concept</h2>
      <h3>feature Coming Soon</h3>
      <p className='footer-subscription-heading'>
        Contact me
      </p>
      <p className='footer-subscription-text'>
        Ill get back to you soon
      </p>
      <div className='input-areas'>
        <form>
          <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
          <Button buttonStyle='btn--primary'>Send</Button>
        </form>
      </div>
    </section>
    </>
  );
}

export default Contact;
