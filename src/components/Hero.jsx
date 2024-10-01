// import React from 'react'
// import '@react-pdf-viewer/core/lib/styles/index.css'; // PDF Viewer styles

import HeroImage from "../assets/aboutme-image.jpg";

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Chakali Madhu Sudhakar</span>
            , Front-End Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <a href="#contact"
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</a>
            <a href="https://1drv.ms/w/c/5a4104dd102ef34a/EZMlWfzTm1pCiFTxXUe8t4YBpmBrAuSMqFLB5162u5BSTA?e=vhfj4h" target="_blank"
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</a>
        </div>

    </div>
  )
}

export default Hero