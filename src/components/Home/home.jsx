import React from 'react'
// import Profile from '../../assets/profile.jpg'
import TechStack from './techStack';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa6';
import wavingHand from '../../assets/waving-hand.svg'
import pinSeo from '../../assets/pin-seo.svg'

export default function home({homeRef}) {
    return (
        <div ref={homeRef}>
            <div className='grid grid-cols-1 pt-40'>
                <div className='mt-14 text-center mx-auto'>
                    <h1 className='font-bold text-6xl font-montserrat'>Front-End React Developer <img className='inline w-10 h-10' src={wavingHand} alt='wavingHand' /> </h1>
                    <p className='mt-6 font-medium text-lg font-montserrat text-stone-500'>Hi, I'm Haris Khan. A passionate Frontend Developer based in New York, United States <img className='inline w-6 h-6' src={pinSeo} alt='pinSeo' /></p>
                    <div className='flex justify-center gap-5 mt-6'>
                        <a href="https://github.com/hariskhan317">
                            <AiFillGithub size={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/haris-khan-9b6449292/">
                            <FaLinkedin size={40} />
                        </a>
                    </div>
                </div>
                <>
                    {/* <img src={Profile} className='w-80 h-80 mx-auto rounded-full' /> */}
                </>
            </div>
            <TechStack />
        </div>
    )
}
