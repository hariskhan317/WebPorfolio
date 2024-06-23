import React from 'react';
import Navbar from './components/navbar'
import Home from './components/Home/home'
import About from './components/About/about'
import Projects from './components/Projects/projects';
import Experience from './components/Experience/experience'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import SpaceBackground from './components/THREE/SpaceBackground'
import Stats from './components/Stats/Stats';
import './app.css'

function App() {

  return (
    <>
      {/* Header */}
      <div className='absolute top-0 z-10'>
        <SpaceBackground />
      </div>
      <header className='navbar fixed top-20 w-full z-50'>
        <Navbar />
      </header>
      <div className='relative  h-auto z-20'>
        <Home />
        <About />
        <Projects />
        <Stats />
        <Experience />
        <Contact />
      </div>
      <footer className='absolute left-0 w-full z-50'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
