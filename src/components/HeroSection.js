import React from 'react'
import'../App.css';
import { Button } from './Button'
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src="/videos/video-1.mp4" autoPlay loop muted/>*/}
      <h1> &gt; HELLO, WORLD! </h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
      <Link to='/projects' className='btn-mobile'>
        <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
          See Projects
        </Button>
      </Link>
      <Link to='/contact' className='btn-mobile'>
        <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
          Contact Me <i className='far fa-envelope'/>
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
