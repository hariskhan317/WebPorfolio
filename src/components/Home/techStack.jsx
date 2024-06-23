import React from 'react';
import Skills from '../../assets/techStackSkills' 

export default function TechStack() {

    return (
        <div className='techstack flex flex-col lg:flex-row justify-center gap-10 mt-14 md:mt-28 px-10 z-30  '>
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
