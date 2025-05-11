import React from 'react'
import HeroSection from './hero';
import About from './about';
import Services from './services';
import Projects from './project';
import Contact from './contact';

const home = () => {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>

    </div>
  )
}

export default home