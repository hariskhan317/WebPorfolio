import React from 'react'

export default function navbar({handleNavbarSection, isActive}) {
    return (
        <header className='fixed left-[-20px] w-full top-0 px-10 bg-transparent py-4 md:py-8 z-50'>
            <div className='flex justify-between'>
                <div className='hidden sm:inline font-semibold text-xl font-montserrat'>Haris.dev</div>
                <div>
                    <ul className='flex gap-3 md:gap-10'>
                        <li onClick={() => handleNavbarSection('home')} className={`${isActive === 'home' ? 'text-sky-400 border-b-2 border-sky-400': 'text-white'} pb-0.5 px-1 font-semibold cursor-pointer text-xs md:text-base font-montserrat`}>Home</li>
                        <li onClick={() => handleNavbarSection('about')} className={`${isActive === 'about' ? 'text-sky-400 border-b-2 border-sky-400': 'text-white'} pb-0.5 px-1 font-semibold cursor-pointer text-xs md:text-base font-montserrat`}>About</li>
                        <li onClick={() => handleNavbarSection('projects')} className={`${isActive === 'projects' ? 'text-sky-400 border-b-2 border-sky-400': 'text-white'} pb-0.5 px-1 font-semibold cursor-pointer text-xs md:text-base font-montserrat`}>Projects</li>
                        <li onClick={() => handleNavbarSection('experience')} className={`${isActive === 'experience' ? 'text-sky-400 border-b-2 border-sky-400': 'text-white'} pb-0.5 px-1 font-semibold cursor-pointer text-xs md:text-base font-montserrat`}>Experience</li>
                        <li onClick={() => handleNavbarSection('contact')} className={`${isActive === 'contact' ? 'text-sky-400 border-b-2 border-sky-400': 'text-white'} pb-0.5 px-1 font-semibold cursor-pointer text-xs md:text-base font-montserrat`}>Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
