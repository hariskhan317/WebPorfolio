import React from 'react'
import '../../assets/style.css'
export default function experience({experienceRef}) {
    return (
        <div ref={experienceRef} className="mt-20 md:mt-40 px-10 md:px-40 pt-20 md:pt-40">
            <h1 className='font-bold text-lg font-montserrat text-sky-800 uppercase'>Experience</h1>
            <p className='mt-1 font-bold text-2xl font-montserrat text-black'>Excelled in roles at renowned companies, contributing <br /> expertise to drive impactful results. 🌟 </p>
            <div className='px-5'>
                <div class="mt-10 tl-content tl-content-active">
                    <div className="tl-header">
                        <span className="tl-marker"></span>
                        <p className="-mt-4 font-semibold text-lg font-montserrat uppercase text-black border-b border-stone-300"> Frontend Developer AT TRADEZELLA </p>
                        <time className='mt-6 font-medium text-xs font-montserrat text-stone-600' datetime="2023-06-20"> Oct 2022 - Mar 2024 </time>
                    </div>
                    <div className="tl-body">
                        <ul className='pt-5 pb-7 list-disc px-5'>
                            <li className='font-medium text-base font-montserrat text-stone-700'>Led the strategic development of innovative user interfaces, harnessing cutting-edge technologies such as HTML5, CSS3, Material UI, React, and Redux to deliver an unparalleled user experience.</li>
                            <li className='font-medium text-base font-montserrat text-stone-700'>We revamped the Dark Mode functionality using a custom react hook, which resulted in a remarkable 20% increase in user satisfaction and a substantial enhancement in overall usability.</li>
                            <li className='font-medium text-base font-montserrat text-stone-700'>We utilized a React custom hook to amplify mobile responsiveness, resulting in a notable 30% advancement in load times and optimizing user engagement to the fullest extent.</li>
                            <li className='font-medium text-base font-montserrat text-stone-700'>Collaborated closely with designers and Quality Assurance (QA) professionals to refine design specifications, resulting in a visually polished application.</li>
                            <li className='font-medium text-base font-montserrat text-stone-700'>Conducted code reviews and collaborated with team members to uphold coding standards and ensure high-quality code.</li>
                        </ul>
                    </div>
                </div>
                <div className="tl-content tl-content-active">
                    <div className="tl-header">
                        <span className="tl-marker"></span>
                        <p className="-mt-4  font-semibold text-lg font-montserrat uppercase text-black border-b border-stone-300"> FREELANCER AT FIVERR</p>
                        <time className='mt-6 font-medium text-xs font-montserrat text-stone-600' datetime="2023-06-20">Sept 2021 – Aug 2022</time>
                    </div>
                    <div className="tl-body">
                        <ul className='pt-5 pb-7 list-disc px-5'>
                            <li className='font-medium text-base font-montserrat text-stone-700'>Professionally Managed and Executed Diverse Web Development Projects, Demonstrating Proficiency in HTML, CSS, and JavaScript.</li>
                            <li className='font-medium text-base font-montserrat text-stone-700'>Effectively Utilized Leading Frontend Frameworks Including Tailwind CSS, Material UI, and Bootstrap to Craft Responsive and Visually Engaging User Interfaces.</li>
                            <li className='font-medium text-base font-montserrat text-stone-700'>Implemented Dynamic and Interactive Components with Vue.js, Enhancing User Experiences and Elevating Website Functionality.</li>
                            <li className='font-medium text-base font-montserrat text-stone-700'>I have demonstrated strong collaboration skills by Engaging Closely with Clients, Actively Listening to Discern Unique Project Requirements, and Consistently Delivering Tailored Solutions That Exceed Expectations.</li>
                        </ul> 
                    </div>
                </div>
                <div className="tl-content"> 
                </div>
            </div>
        </div>
  )
}
