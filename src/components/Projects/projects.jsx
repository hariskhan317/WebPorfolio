import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import RatePin from '../../assets/ratepin.png'
import reactSvg from '../../assets/react.svg'
import tailwind from '../../assets/tailwindcss.svg'
import javaScript from '../../assets/javascript.svg'
import express from '../../assets/express.svg'
import mongodb from '../../assets/mongodb.svg'
import node from '../../assets/node2.svg' 



export default function projects({projectsRef}) {
    return (
        <div ref={projectsRef} className='pt-20 md:mt-40 pt-20 md:pt-40 px-10 md:px-0'>
            <div>
                <h1 className='font-bold text-lg font-montserrat text-sky-800 uppercase'>Projects</h1>
                <p className='mt-1 font-bold text-2xl font-montserrat text-black'>Each Project is a Unique piece of Development 💻 </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-14 md:mt-14'>
                <div className='col-span-1 md:col-span-2'>
                    <a href='https://rate-pin-frontend.vercel.app/' target="_blank" rel="noreferrer" >
                        <img src={RatePin} className='mt-4 w-full h-full md:h-64 rounded-lg' alt="" />
                    </a>
                </div>
                <div className='col-span-1 md:col-span-3 mt-10 md:mt-0'>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <MdLocationPin className='mt-1 text-2xl text-sky-800' />
                            <p className='text-center text-2xl font-bold text-sky-800 font-montserrat'>RatePin</p>
                        </div>
                        <div className='flex gap-5 mt-1'>
                            <img src={reactSvg} className='w-6 h-6' alt="reactSvg" />
                            <img src={tailwind} className='w-6 h-6' alt="tailwind" />
                            <img src={javaScript} className='w-6 h-6' alt="javaScript" />
                            <img src={express} className='w-6 h-6' alt="express" />
                            <img src={mongodb} className='w-6 h-6' alt="mongodb" />
                            <img src={node} className='w-6 h-6' alt="node" />
                        </div>  
                    </div>
                    <ul className='list-disc pl-7 pt-4 pb-6'>
                        <li className='font-medium text-base font-montserrat text-stone-600'>Users can assign ratings to various places they visit directly from the web application.</li>
                        <li className='font-medium text-base font-montserrat text-stone-600'>Intuitive map interface providing a visual representation of places and their ratings/reviews.</li>
                        <li className='font-medium text-base font-montserrat text-stone-600'>Users can leave detailed reviews for places they rate, sharing their experiences and opinions.</li>
                        <li className='font-medium text-base font-montserrat text-stone-600'>One-Click Rating: Simplified rating process by allowing users to click on the location on the map to provide feedback.</li>
                        <li className='font-medium text-base font-montserrat text-stone-600'>The application automatically captures the latitude and longitude of the selected place, eliminating the need for manual input.</li>
                    </ul>
                    <div className='flex justify-start gap-12 pl-3'>
                        <div>
                            <a href='https://github.com/hariskhan317/RatePin' target="_blank" rel="noreferrer" className='flex gap-3 text-base font-semibold font-montserrat'>
                                Code
                                <FaGithub className='mt-0.5' />
                            </a>
                        </div>
                        <div>
                            <a href='https://rate-pin-frontend.vercel.app/' target="_blank" rel="noreferrer" className='flex gap-3 text-base font-semibold font-montserrat'>
                                Live Demo
                                <FaExternalLinkAlt className='mt-0.5' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
