import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/info'>Previous Work</Link>
            <Link to='/'>References</Link>
            <Link to='/'>Programing Experience</Link>
            <Link to='/'>Terms of services</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img className='footer-img' src={'icons/eb-red-small.png'} alt={'EB'} />
            </Link>
          </div>
          <small className='website-rights'>EB <i className="fas fa-copyright"></i> 2020</small>
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
