import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa6';

export default function footer() {
  return (
    <div className='bg-transparent w-full'>
        <div className='container mx-auto max-w-9xl'>
            <div className='flex justify-between'>
                <div className='flex text-center mx-auto md:mx-0'>
                    <p className='mt-1.5 font-medium text-white text-base font-montserrat border-r pr-4'>&copy; Haris.dev</p>
                    <p className='mt-1.5 font-medium text-white text-base font-montserrat pl-4'>All rights reserved.</p>
                </div>
                <div className='flex gap-6 text-center md:text-right mx-auto md:mx-0 mt-0'>
                    <a href="https://github.com/hariskhan317" target="_blank" rel="noreferrer">
                        <AiFillGithub size={30} className='text-white' />
                    </a>
                    <a href="https://www.linkedin.com/in/haris-khan-9b6449292/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={30} className='text-white' />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
