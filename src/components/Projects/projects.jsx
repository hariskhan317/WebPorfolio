import React, {useEffect} from 'react'
import { MdLocationPin } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import RatePin from '../../assets/ratepin.png'
import WanderWise from '../../assets/wanderwise.png'
import reactSvg from '../../assets/react.svg'
import tailwind from '../../assets/tailwindcss.svg'
import javaScript from '../../assets/javascript.svg'
import express from '../../assets/express.svg'
import mongodb from '../../assets/mongodb.svg'
import node from '../../assets/node2.svg' 
import gsap from 'gsap'; 



export default function Projects() {
    useEffect(() => { 
        gsap.from('.projects', { y: -260, opacity: 0 });
        gsap.to('.projects', 1, { y: 0, ease: 'easeOut', opacity: 1, });  

        gsap.from('.projects-left', { x: -260, ease: 'easeOut', opacity: 0 });
        gsap.to('.projects-left', 1, { x: 0, ease: 'easeOut', opacity: 1, });
    
        gsap.from('.projects-right', { x: 260, ease: 'easeOut', opacity: 1, });   
        gsap.to('.projects-right', 1, { x: 0, ease: 'easeOut', opacity: 1, });   

        gsap.from('.techstack', { y: -160, opacity: 0 });
        gsap.to('.techstack', 1.5, { y: 0, ease: 'Bounce.easeOut', opacity: 1, });  
    })
    return (
        <div className='px-10 md:px-28 mt-80 projects'>
            <div className='projects'>
                <h1 className='text-center font-bold text-lg font-montserrat text-sky-500 uppercase'>Projects</h1>
                <p className='text-center mt-1 font-bold text-2xl font-montserrat text-white'>Each Project is a Unique piece of Development 💻 </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                {/* project 1 */}
                <div className='projects-left grid grid-cols-1 md:grid-cols-5 gap-6 md:mt-14'>
                    <div className='col-span-1 md:col-span-2'>
                        <a href='https://wander-wise.netlify.app/' target="_blank" rel="noreferrer" >
                            <img src={WanderWise} className='mt-4 w-full h-full md:h-44 rounded-lg' alt="" />
                        </a>
                    </div>
                    <div className='col-span-1 md:col-span-3 mt-10 md:mt-4'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <MdLocationPin className='mt-1 text-2xl text-sky-500' />
                                <p className='text-center text-2xl font-bold text-sky-500 font-montserrat'>Wander Wise</p>
                            </div>
                            <div className='techstack flex gap-5 mt-1'>
                                <img src={reactSvg} className='w-6 h-6' alt="reactSvg" />
                                <img src={tailwind} className='w-6 h-6' alt="tailwind" />
                                <img src={javaScript} className='w-6 h-6' alt="javaScript" /> 
                            </div>  
                        </div>
                        <div className='pt-2 pb-3'>
                            <p className='font-medium text-base py-4 md:py-0 md:text-[13px] font-montserrat text-stone-400'> Discover the Wander Wise app, your ultimate guide to restaurants and reviews. With this application, explore reviews, find addresses, and visualize locations on the map. Developed using React and Tailwind CSS, it integrates Rapid API and Google Maps API to seamlessly fetch data.</p>
                        </div>
                        <div className='flex justify-start gap-12 pl-3'>
                            <div>
                                <a href='https://github.com/hariskhan317/wanderwiseProject' target="_blank" rel="noreferrer" className='flex gap-1.5 text-base text-stone-400 underline font-semibold font-montserrat'>
                                    Code
                                    <FaGithub className='mt-0.5' />
                                </a>
                            </div>
                            <div>
                                <a href='https://wander-wise.netlify.app/' target="_blank" rel="noreferrer" className='flex gap-1.5 text-base text-stone-400 underline font-semibold font-montserrat'>
                                    Live Demo
                                    <FaExternalLinkAlt className='mt-0.5' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* project 2 */}
                <div className='projects-right grid grid-cols-1 md:grid-cols-5 gap-6 md:mt-14'>
                    <div className='col-span-1 md:col-span-2'>
                        <a href='https://rate-pin-frontend.vercel.app/' target="_blank" rel="noreferrer" >
                            <img src={RatePin} className='mt-4 w-full h-full md:h-44 rounded-lg' alt="" />
                        </a>
                    </div>
                    <div className='col-span-1 md:col-span-3 mt-10 md:mt-4'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <MdLocationPin className='mt-1 text-2xl text-sky-500' />
                                <p className='text-center text-2xl font-bold text-sky-500 font-montserrat'>RatePin</p>
                            </div>
                            <div className='techstack flex gap-5 mt-1'>
                                <img src={reactSvg} className='w-6 h-6' alt="reactSvg" />
                                <img src={tailwind} className='w-6 h-6' alt="tailwind" />
                                <img src={javaScript} className='w-6 h-6' alt="javaScript" />
                                <img src={express} className='w-6 h-6' alt="express" />
                                <img src={mongodb} className='w-6 h-6' alt="mongodb" />
                                <img src={node} className='w-6 h-6' alt="node" />
                            </div>  
                        </div>
                        <div className='pt-2 pb-3'>
                            <p className='font-medium py-4 md:py-0 md:text-[13px] font-montserrat text-stone-400'>Discover, rate, and review places effortlessly with our intuitive map interface. Share your experiences, leave detailed reviews, and provide feedback with our One-Click Rating feature. Plus, say goodbye to manual input – our app automatically captures location details for you!</p>
                        </div>
                        <div className='flex justify-start gap-12 pl-3'>
                            <div>
                                <a href='https://github.com/hariskhan317/RatePin' target="_blank" rel="noreferrer" className='flex gap-1.5 text-base font-semibold text-stone-400 underline font-montserrat'>
                                    Code
                                    <FaGithub className='mt-0.5' />
                                </a>
                            </div>
                            <div>
                                <a href='https://rate-pin-frontend.vercel.app/' target="_blank" rel="noreferrer" className='flex gap-1.5 text-base font-semibold text-stone-400 underline font-montserrat'>
                                    Live Demo
                                    <FaExternalLinkAlt className='mt-0.5' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
