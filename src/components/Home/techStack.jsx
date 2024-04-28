import React, { useEffect } from 'react';
import Skills from '../../assets/techStackSkills'
import gsap from 'gsap'; 

export default function TechStack() {
    useEffect(() => { 
        gsap.from('.techstack', { y: 260, opacity: 0 });
        gsap.to('.techstack', 2.3, { y: 0, ease: 'Bounce.easeOut', opacity: 1, });  
    })

    return (
        <div className='techstack flex flex-col lg:flex-row justify-center gap-10 mt-10 md:mt-28 px-10 md:px-0 z-30 relative'>
            <div className='border-r-0 md:border-r-2 py-2 pr-5 border-stone-300'>
                <p className='font-semibold text-base font-montserrat text-center md:text-left'>Tech Stack</p>
            </div>
            <div className='flex gap-8 flex-wrap justify-center'>
                {Skills.map((skill) => (
                    <img src={skill} className='w-9 h-9' alt="skill" />
                ))}
            </div>
        </div>
    )
}
