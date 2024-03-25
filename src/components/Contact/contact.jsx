import React from 'react';
import handDown from '../../assets/handDown.svg'
import { FaMapLocationDot } from "react-icons/fa6";
import { TbMailOpenedFilled } from "react-icons/tb";

export default function contact({contactRef}) {
    return (
        <div className='pt-40' ref={contactRef}>
            <h1 className='font-bold text-lg font-montserrat text-sky-800 uppercase'>Contact</h1>
            <h1 className='mt-1 font-bold text-2xl font-montserrat text-black'>Don't be shy! Hit me up! <img className='inline w-6 h-6' src={handDown} alt='handDown' /></h1>
            <div className='flex gap-20 mt-10'>
                <div className='flex gap-5'>
                    <FaMapLocationDot size={40} className='text-sky-800' />
                    <div>
                        <h1 className='font-bold text-sm font-montserrat text-black uppercase'>Location</h1>
                        <p className='pointer mt-4 font-medium text-base font-montserrat text-stone-500'>Staten Island, NY, United States</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <TbMailOpenedFilled size={40} className='text-sky-800' />
                    <div>
                        <h1 className='font-bold text-sm font-montserrat text-black uppercase'>Mail</h1>
                        <a className='mt-4 font-medium text-base font-montserrat text-stone-500' href="mailto:harriss.khan.001@gmail.com">harriss.khan.001@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
