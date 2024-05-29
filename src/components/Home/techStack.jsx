import React, { useEffect } from 'react';
import Skills from '../../assets/techStackSkills'
import gsap from 'gsap'; 
import useIsMobile from '../../hooks/useIsMobile';

export default function TechStack() {
    const isMobile = useIsMobile();
    useEffect(() => { 
        if (!isMobile) {
            gsap.from('.techstack', { y: 260, opacity: 0 });
            gsap.to('.techstack', 2.3, { y: -440, ease: 'Bounce.easeOut', opacity: 1, });     
        }
    }, [isMobile])

    return (
        <div className='techstack flex flex-col lg:flex-row justify-center gap-10 mt-14 md:mt-0 px-10 md:px-0 z-30 absolute top-[9%] md:relative top-0'>
            <div className='border-r-0 md:border-r-2 py-2 pr-5 border-stone-300'>
                <p className='font-semibold text-base font-montserrat text-left'>Tech Stack</p>
            </div>
            <div className='flex gap-8 flex-wrap justify-center'>
                {Skills.map((skill,index) => (
                    <img src={skill} key={index} className='w-8 h-8 md:w-9 md:h-9' alt="skill" />
                ))}
            </div>
        </div>
    )
}
