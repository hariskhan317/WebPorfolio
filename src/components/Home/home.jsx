import React, { useEffect } from 'react'
import TechStack from './techStack';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa6';
import wavingHand from '../../assets/waving-hand.svg'
import pinSeo from '../../assets/pin-seo.svg'
import Ball from '../THREE/ball'
import gsap from 'gsap'; 

export default function Home() {
    
    useEffect(() => { 
        gsap.from('.home', { y: -60, opacity: 0 });
        gsap.to('.home', 1, { y:100, ease: 'easeOut', opacity: 1, });   
      })
    return (
        <div className='home'>
            <div className='px-10 md:px-0'>
                <div className='text-center mx-auto relative z-50'>
                    <h1 className='font-bold text-3xl md:text-6xl font-montserrat'>Front-End React Developer <img className='inline w-10 h-10' src={wavingHand} alt='wavingHand' /> </h1>
                    <p className='px-7 mt-6 font-medium text-base md:text-lg font-montserrat text-stone-400'>Hi, I'm Haris Khan. A passionate Frontend Developer based in New York, United States <img className='inline w-6 h-6' src={pinSeo} alt='pinSeo' /></p>
                    <div className='flex justify-center gap-5 mt-6'>
                        <a href="https://github.com/hariskhan317" target="_blank" rel="noreferrer">
                            <AiFillGithub size={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/haris-khan-9b6449292/" target="_blank" rel="noreferrer">
                            <FaLinkedin size={40} />
                        </a>
                    </div>
                </div>
                <div className=''> 
                    <div className='absolute top-[-500px] mx-auto -right-96 z-0'>
                        <Ball/>
                    </div>
                </div>
            </div>
            <TechStack />
        </div>
    )
}
