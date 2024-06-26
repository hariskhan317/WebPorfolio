import React from 'react'
import handDown from '../../assets/handDown.svg'
import { FaMapLocationDot } from "react-icons/fa6";
import { TbMailOpenedFilled } from "react-icons/tb"; 

export default function Contact() {
    
    return (
        <div id='contact' className='mb-10 md:mb-0 mt-10 md:mt-32 px-10 md:px-28 contact flex justify-center'>
            <div className=''>
                <h1 className='text-center font-bold text-lg font-montserrat text-sky-500 uppercase'>Contact</h1>
                <h1 className='text-center mt-1 font-bold text-base md:text-2xl font-montserrat text-white'>Don't be shy! Hit me up! <img className='inline w-6 h-6' src={handDown} alt='handDown' /></h1>
                <div className='flex gap-10 md:gap-20 flex-col md:flex-row justify-center mt-5 md:mt-10'>
                    <div className='contact-left flex gap-5'>
                        <FaMapLocationDot size={40} className='text-sky-500' />
                        <div>
                            <h1 className='font-bold text-sm font-montserrat text-white uppercase'>Location</h1>
                            <p className='pointer mt-1 font-medium text-base font-montserrat text-stone-400'>Staten Island, NY, United States</p>
                        </div>
                    </div>
                    <div className='contact-right flex gap-5'>
                        <TbMailOpenedFilled size={40} className='text-sky-500' />
                        <div>
                            <h1 className='font-bold text-sm font-montserrat text-white uppercase'>Mail</h1>
                            <a className='mt-4 font-medium text-base font-montserrat text-stone-400' href="mailto:harriss.khan.001@gmail.com">harriss.khan.001@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}