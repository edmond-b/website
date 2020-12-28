import React from 'react'
import '../../App.css'
import { Button } from '../Button'

function Contact() {
  return (
    <>
    <section className='footer-subscription'>
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

export default Contact
