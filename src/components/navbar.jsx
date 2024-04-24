import React from 'react'

export default function navbar({handleNavbarSection}) {
    return (
        <header className='fixed w-full top-0 px-10 bg-black border-b border-stone-500 top-0 py-8 z-50'>
            <div className='flex justify-between'>
                <div className='hidden sm:inline font-semibold text-xl font-montserrat'>Haris.dev</div>
                <div>
                    <ul className='flex gap-10'>
                        <li onClick={() => handleNavbarSection('home')} className='cursor-pointer font-medium text-base font-montserrat'>Home</li>
                        <li onClick={() => handleNavbarSection('about')} className='cursor-pointer font-medium text-base font-montserrat'>About</li>
                        <li onClick={() => handleNavbarSection('projects')} className='cursor-pointer font-medium text-base font-montserrat'>Projects</li>
                        <li onClick={() => handleNavbarSection('experience')} className='cursor-pointer font-medium text-base font-montserrat'>Experience</li>
                        <li onClick={() => handleNavbarSection('contact')} className='cursor-pointer font-medium text-base font-montserrat'>Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
