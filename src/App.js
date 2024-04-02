import React, { useRef } from 'react';
import Navbar from './components/navbar'
import Home from './components/Home/home'
import About from './components/About/about'
import Projects from './components/Projects/projects';
import Experience from './components/Experience/experience'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

function App() {
  const sectionRef = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  }


  const handleNavbarSection = (section) => {
    console.log('dasjd')
    sectionRef[section].current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
      {/* Header */}
      <Navbar handleNavbarSection={handleNavbarSection} />
      <div className='container mx-auto max-w-8xl mt-20'>
        <Home homeRef={sectionRef.home} />
        <About aboutRef={sectionRef.about} />
        <Projects projectsRef={sectionRef.projects} />
        <Experience experienceRef={sectionRef.experience} />
        <Contact contactRef={sectionRef.contact} />
      </div>
      <Footer />
    </>
  );
}

export default App;
