import React from 'react';
import Skills from '../../assets/techStackSkills'



export default function techStack() {
    return (
        <div className='flex flex-col lg:flex-row justify-center gap-10 mt-20 md:mt-40 px-10 md:px-0'>
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
