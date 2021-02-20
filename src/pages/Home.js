import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <HeroSection/>
      <Highlights/>
      <Footer/>
    </>
  );
}

export default Home;
