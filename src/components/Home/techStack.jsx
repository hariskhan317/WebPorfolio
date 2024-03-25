import React from 'react';
import Skills from '../../assets/techStackSkills'



export default function techStack() {
    return (
        <div className='flex justify-center gap-10 mt-40'>
            <div className='border-r-2 py-2 pr-5 border-stone-300'>
                <p className='font-semibold text-base font-montserrat'>Tech Stack</p>
            </div>
            <div className='flex gap-8'>
                {Skills.map((skill) => (
                    <img src={skill} className='w-9 h-9' alt="" />
                ))}
            </div>
        </div>
    )
}
