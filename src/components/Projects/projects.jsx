import React from 'react' 
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from './projectList'; 

export default function Projects() {

    return (
        <div id="projects" className='mt-20 md:mt-64 px-10 md:px-28 projects'>
            <div className='projects'>
                <h1 className='text-center font-bold text-lg font-montserrat text-sky-500 uppercase'>Projects</h1>
                <p className='text-center mt-1 font-bold text-base md:text-2xl font-montserrat text-white'>Each Project is a Unique piece of Development 💻 </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 mt-14'>
                {projects.map((project, index) => (
                    <div key={index} className='projects-left grid grid-cols-1 md:grid-cols-5 gap-6 md:mt-14'>
                        <div className='hidden md:block col-span-1 md:col-span-2'>
                            <a href={project.liveDemo} target="_blank" rel="noreferrer" >
                                <img src={project.img} className='mt-4 w-full h-full md:h-44 rounded-lg' alt="" />
                            </a>
                        </div>
                        <div className='col-span-1 md:col-span-3 mt-10 md:mt-4'>
                            <div className='flex justify-between flex-col md:flex-row gap-0'>
                                <div className='flex text-xl md:text-2xl'>
                                    <div>{ project.icon}</div>
                                    <p className='text-center font-semibold md:font-bold text-base md:text-lg mt-0.5 text-sky-500 font-montserrat'>{project.name}</p>
                                </div>
                                <div className='techstack justify-end flex gap-3 mt-1'> 
                                    {project.techstack.map((item) => (
                                        <img src={item} className='w-5 h-5' alt="reactSvg" />
                                    ))}
                                </div>  
                            </div>
                            <div className='pt-2 pb-3'>
                                <p className='font-medium text-sm py-2 md:py-0 md:text-[13px] font-montserrat text-stone-400'> {project.description}</p>
                            </div>
                            <div className='flex justify-start gap-12 pl-3'>
                                <div>
                                    <a href={project.githubLink} target="_blank" rel="noreferrer" className='flex gap-1.5 text-base text-stone-400 underline font-semibold font-montserrat'>
                                        Code
                                        <FaGithub className='mt-0.5' />
                                    </a>
                                </div>
                                {project.liveDemo && (                          <div>
                                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className='flex gap-1.5 text-base text-stone-400 underline font-semibold font-montserrat'>
                                        Live Demo
                                        <FaExternalLinkAlt className='mt-0.5' />
                                    </a>
                                </div>)} 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
