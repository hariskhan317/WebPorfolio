import React from 'react'

export default function navbar({handleNavbarSection, isActive}) {
    return (
        <header className='fixed w-full top-0 px-10 bg-transparent py-4 md:py-8 z-50'>
            <div className='flex justify-between'>
                <div className='hidden sm:inline font-semibold text-xl font-montserrat'>Haris.dev</div>
                <div>
                    <div className='flex justify-start gap-3 md:gap-10'>
                        <div onClick={() => handleNavbarSection('home')} className={`${isActive === 'home' ? 'text-sky-400 border-b-2 border-sky-400': 'text-white'} pb-0.5 px-1 font-semibold cursor-pointer text-xs md:text-base font-montserrat`}>Home</div>
                        <div onClick={() => handleNavbarSection('about')} className={`${isActive === 'about' ? 'text-sky-400 border-b-2 border-sky-400': 'text-white'} pb-0.5 px-1 font-semibold cursor-pointer text-xs md:text-base font-montserrat`}>About</div>
                        <div onClick={() => handleNavbarSection('projects')} className={`${isActive === 'projects' ? 'text-sky-400 border-b-2 border-sky-400': 'text-white'} pb-0.5 px-1 font-semibold cursor-pointer text-xs md:text-base font-montserrat`}>Projects</div>
                        <div onClick={() => handleNavbarSection('experience')} className={`${isActive === 'experience' ? 'text-sky-400 border-b-2 border-sky-400': 'text-white'} pb-0.5 px-1 font-semibold cursor-pointer text-xs md:text-base font-montserrat`}>Experience</div>
                        <div onClick={() => handleNavbarSection('contact')} className={`${isActive === 'contact' ? 'text-sky-400 border-b-2 border-sky-400': 'text-white'} pb-0.5 px-1 font-semibold cursor-pointer text-xs md:text-base font-montserrat`}>Contact</div>
                    </div>
                </div>
            </div>
        </header>
    )
}
