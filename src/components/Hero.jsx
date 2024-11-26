import React from 'react';
// import HeroImage from "assets/aboutme-image.jpg";
// import banner from "assets/linkedinBanner.jpg"

const Hero = () => {
  return (
    <div id="home" className='bg-green-200 rounded border-1 mx-0 sm:mx-32 text-white text-center mt-14 sm:mt-28  pb-16 shadow-lg'>
      <div className="animate-fadeIn transition-all duration-500">
        <div className='w-full mb-0 sm:mb-8 h-36 sm:h-72 bg-cover flex sm:flex-row justify-start items-center rounded bg-bottom'
          style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/minimalist-home-office-setup-with-desktop-computer-houseplants-wooden-desk-against-pink-wall_996993-48571.jpg?w=1380')` }}
        >
          <img
            src='assets/aboutme-image.jpg'
            alt="Chakali Madhu Sudhakar"
            className='sm:w-52 sm:h-52 w-28 h-28 ml-2 sm:ml-10 rounded-full object-cover shadow-lg transform transition-transform duration-300 hover:scale-105'
          />
          <span className='text-4xl shadow-lg shadow-green-200 px-3  ml-2 sm:ml-10 text-black font-bold hidden sm:block typing-text'>Front-End Developer</span>
        </div>
        <div className='px-6 pt-5'>
          <div className='flex justify-center items-center'>
            <p className='text-2xl shadow-lg py-2 my-5 shadow-rose-600 ml-2 sm:ml-10 text-black font-bold sm:hidden block typing-text'>Front-End Developer</p>
          </div>
          <p className='text-xl py-3 sm:py-0 sm:text-4xl inline sm:hidden text-slate-700 font-bold'>Hi, I’m{" "} <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600'>
            Chakali Madhu Sudhakar
          </span>  – Crafting Seamless Front-End Experiences!
          </p>
          <marquee className='text-2xl py-3 sm:py-0 sm:text-4xl hidden sm:block text-black font-bold'>
            Hi, I’m{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600'>
              Chakali Madhu Sudhakar
            </span>  – Crafting Seamless Front-End Experiences!
          </marquee>
          <p className='mt-4 text-lg text-black san-serif'>
            With 2 years of experience, I specialize in building responsive, user-centric web applications using React, JavaScript, HTML, and CSS.
          </p>
          <p className='mt-2 text-lg text-black'>
            My work is focused on delivering smooth, engaging user experiences and scalable code. I'm constantly expanding my skillset with new technologies and backend knowledge, including Node.js and MongoDB.
          </p>

          <div className='mt-8 space-x-4'>
            <a href="#contact">
              <button
                type="button"
                className='bg-gradient-to-r from-green-400 to-blue-500 font-semibold text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Contact Me
              </button>
            </a>
            <a href="https://1drv.ms/w/c/5a4104dd102ef34a/EZMlWfzTm1pCiFTxXUe8t4YBpmBrAuSMqFLB5162u5BSTA?e=vhfj4h" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className='bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-semibold transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
