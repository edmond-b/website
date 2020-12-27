import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the adventure
        </p>
        <p className='footer-subscription-text'>
          You can leave anytime you want
        </p>
        <div className='input-areas'>
          <form>
            <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-item'>
            <h2>About Us</h2>
            <Link to='/info'>How it Works</Link>
            <Link to='/'>References</Link>
            <Link to='/'>Experience</Link>
            <Link to='/'>Terms of services</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-item'>
            <h2>About Us</h2>
            <Link to='/info'>How it Works</Link>
            <Link to='/'>References</Link>
            <Link to='/'>Experience</Link>
            <Link to='/'>Terms of services</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={'icons/eb-red-small.png'} alt={'EB'} />
            </Link>
          </div>
          <small className='wesite-rights'>EB c 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook'></i>
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-linkedin'></i>
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-instagram'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
