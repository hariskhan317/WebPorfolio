import RatePin from '../../assets/ratepin.png'
// import Spendex from '../../assets/spendex.png'
import WanderWise from '../../assets/wanderwise.png'
import reactSvg from '../../assets/react.svg'
import tailwind from '../../assets/tailwindcss.svg'
import javaScript from '../../assets/javascript.svg'
import ChatgptClone from '../../assets/ChatgptClone.png'
import express from '../../assets/express.svg'
import mongodb from '../../assets/mongodb.svg'
import node from '../../assets/node2.svg' 
import { MdLocationPin } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
// import { GrCalculator } from "react-icons/gr";

export const projects = [
    // {
    //     'img': Spendex,
    //     'icon': <GrCalculator className='mt-1 mr-2 text-sky-500' />,
    //     'name': 'SpendeX',
    //     'techstack': [reactSvg, tailwind, javaScript, express, mongodb, node],
    //     'description': "I developed a MERN stack application for tracking monthly budgets, enabling users to add and manage their budget and expenses. It uses JWT for secure authentication, React Router for navigation, and React's Context API for state management. The backend is built with Express and Node.js, with MongoDB for data storage.",
    //     'githubLink': 'https://github.com/hariskhan317/Finance-Tracker',
    //     'liveDemo': 'https://finance-tracker-plum.vercel.app/'
    // },
    {
        'img': ChatgptClone,
        'icon': <LuBrainCircuit className='mt-1 mr-1 text-sky-500' />,
        'name': 'Chatgpt Clone',
        'techstack': [reactSvg, tailwind, javaScript, express, mongodb, node],
        'description': "I created a modern clone of ChatGPT using the MERN stack, integrating JWT for authentication and an auth context for seamless data management. This application replicates ChatGPT's functionality with a user-friendly interface, enabling efficient communication and interaction.",
        'githubLink': 'https://github.com/hariskhan317/AiChatApp',
        'liveDemo': ''
    },
    {
        'img': WanderWise,
        'icon': <MdLocationPin className='mt-1 text-sky-500' />,
        'name': 'Wander Wise',
        'techstack': [reactSvg, tailwind, javaScript],
        'description': 'Discover the Wander Wise app, your ultimate guide to restaurants and reviews. With this application, explore reviews, find addresses, and visualize locations on the map. Developed using React and Tailwind CSS, it integrates Rapid API and Google Maps API to seamlessly fetch data.',
        'githubLink': 'https://github.com/hariskhan317/wanderwiseProject',
        'liveDemo': 'https://wander-wise.netlify.app/'
    },
    {
        'img': RatePin,
        'icon': <MdLocationPin className='mt-1 text-sky-500' />,
        'name': 'RatePin',
        'techstack': [reactSvg, tailwind, javaScript, express, mongodb, node],
        'description': 'Discover, rate, and review places effortlessly with our intuitive map interface. Share your experiences, leave detailed reviews, and provide feedback with our One-Click Rating feature. Plus, say goodbye to manual input – our app automatically captures location details for you!',
        'githubLink': 'https://github.com/hariskhan317/RatePin',
        'liveDemo': 'https://rate-pin-frontend.vercel.app/'
    }
]
