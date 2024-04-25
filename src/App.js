import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar'
import Home from './components/Home/home'
import About from './components/About/about'
import Projects from './components/Projects/projects';
import Experience from './components/Experience/experience'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import SpaceBackground from './components/THREE/SpaceBackground'
import './app.css'
import gsap from 'gsap'; 

function App() {
  const [isActive, setIsActive]  = useState('home') ;

  useEffect(() => {
    gsap.from('.navbar', { y: -150, opacity: 0 });
    gsap.to('.navbar', 2, { y: -60, ease: 'easeOut', opacity: 1, });

    gsap.from('.footer', { y: 260, opacity: 0 });
    gsap.to('.footer', 2, { y: 10, ease: 'easeOut', opacity: 1, });
  },[])

  const handleNavbarSection = (section) => {
    setIsActive(section) 
  }
  return (
    <>
      {/* Header */}
      <div className='absolute top-0 z-10'>
        <SpaceBackground />
      </div>
      <header className='navbar fixed top-20 left-0 w-full z-50'>
        <Navbar isActive={isActive} handleNavbarSection={handleNavbarSection} />
      </header>
      <div className='relative flex justify-center items-center h-screen z-20'>
        { isActive === 'home' && (<Home />) }
        { isActive === 'about' && (<About />) }
        { isActive === 'projects' && (<Projects />) }
        { isActive === 'experience' && (<Experience />) }
        { isActive === 'contact' && (<Contact />) }
      </div>
      <footer className='footer fixed bottom-16 left-0 w-full z-50'>
          <Footer />
        </footer> 
    </>
  );
}

export default App;
