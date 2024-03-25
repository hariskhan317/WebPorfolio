import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa6';

export default function footer() {
  return (
    <div className='bg-black w-full pt-4 pb-6 mt-24'>
        <div className='container mx-auto max-w-6xl'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <p className='mt-1.5 font-medium text-white text-base font-montserrat border-r pr-4'>&copy; Haris.dev</p>
                    <p className='mt-1.5 font-medium text-white text-base font-montserrat pl-4'>All rights reserved.</p>
                </div>
                <div className='flex gap-6'>
                      <a href="https://github.com/hariskhan317">
                            <AiFillGithub size={30} className='text-white' />
                        </a>
                        <a href="https://www.linkedin.com/in/haris-khan-9b6449292/">
                            <FaLinkedin size={30} className='text-white' />
                        </a>
                </div>
            </div>
        </div>
    </div>
  )
}
