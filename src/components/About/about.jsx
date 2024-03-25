import React from 'react'
import aboutImg from '../../assets/about.avif'
import pinSeo from '../../assets/pin-seo.svg'

export default function about({aboutRef}) {
  return (
    <div ref={aboutRef} className='grid grid-cols-7 gap-10 mt-40 pt-40'>
          <div className='col-span-3'>
              <img src={aboutImg} className='w-full rounded-xl' alt="aboutImg" />
          </div>
          <div className='col-span-4 mt-12'>
              <h5 className='font-bold text-lg font-montserrat text-sky-800 uppercase'>About Me</h5>
              <h1 className='mt-2 font-bold text-2xl font-montserrat text-black'> A dedicated Frontend Developer based in <br /> New York, United States <img className='inline w-6 h-6' src={pinSeo} alt="pinSeo" /></h1>
              <p className='mt-4 font-medium text-base font-montserrat text-stone-500'>
                👋 Hi there! I'm a passionate software engineer with a versatile skill set and a dedication to crafting engaging and efficient digital experiences.
                <br /><br />
                🎓 I earned my Bachelor's degree in Software Engineering from the esteemed University of Gujrat, where I gained a solid foundation in the principles of software development.
                <br /><br />
                💼 My journey began with freelancing, where I honed my skills as a front-end developer for 8 to 9 months. During this time, I primarily worked on HTML, CSS, JavaScript, and Vue.js, building interactive and responsive web applications that met the unique needs of my clients.
                <br /><br />
                🚀 and then i Worked at Tradezella as a FrontEnd Engineer, where I primarily focus on frontend development using React. I relish the opportunity to create sleek and user-friendly interfaces, ensuring seamless user interactions.
                <br /><br />
                🔍 My areas of expertise encompass a wide range of technologies, including JavaScript, TypeScript, HTML5, CSS3, React.js, React Hooks, Redux, Express Js, Node Js, MongoDB, Tailwind CSS, Bootstrap, Material UI, Git, Github, Firebase, Aws, Docker. I love diving into the intricacies of these languages and frameworks to craft robust and efficient solutions for complex problems.
                <br /><br />
                {/* 🌟 I'm driven by a passion for innovation and a commitment to delivering high-quality software that makes a difference. Whether it's optimizing performance, enhancing user experiences, or solving intricate technical challenges, I'm always up for the task. */}
              </p>
          </div>
    </div>
  )
}
