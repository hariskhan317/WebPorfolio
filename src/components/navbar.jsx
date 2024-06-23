import React, { useState } from 'react'

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('home');
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            console.log(activeLink)
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(sectionId); // Set the active link
        }
    };

    return (
        <header className='fixed w-full top-0 px-10 bg-transparent py-4 md:py-8 z-50'>
            <div className='flex justify-between'>
                <div className='hidden sm:inline font-semibold text-xl font-montserrat'>Haris.dev</div>
                <div>
                    <div className='flex justify-start gap-3 md:gap-10'>
                        <div onClick={() => handleScroll('home')} className='text-sky-400 text-white pb-0.5 px-1 font-semibold cursor-pointer text-sm md:text-base font-montserrat'>Home</div>
                        <div onClick={() => handleScroll('about')} className='text-sky-400 text-white pb-0.5 px-1 font-semibold cursor-pointer text-sm md:text-base font-montserrat'>About</div>
                        <div onClick={() => handleScroll('projects')} className='text-sky-400 text-white pb-0.5 px-1 font-semibold cursor-pointer text-sm md:text-base font-montserrat'>Projects</div>
                        <div onClick={() => handleScroll('experience')} className='text-sky-400 text-white pb-0.5 px-1 font-semibold cursor-pointer text-sm md:text-base font-montserrat'>Experience</div>
                        <div onClick={() => handleScroll('contact')} className='text-sky-400 text-white pb-0.5 px-1 font-semibold cursor-pointer text-sm md:text-base font-montserrat'>Contact</div>
                    </div>
                </div>
            </div>
        </header>
    )
}
