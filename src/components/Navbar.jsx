import React from 'react'

const  Navbar = () => {
  return (
    <nav className='w-full bg-green-100 fixed z-10 top-0 flex justify-between items-center'>
      <div className='w-full py-3 flex justify-around items-center'>
        <div className='text-2xl font-bold hidden md:inline bg-clip-text bg-gradient-to-r from-green-700 to-blue-700 text-transparent'>Madhu Sudhakar</div>
        <div className='space-x-6 text-lg'>
          <a href="#home" className='hover:text-green-600 font-semibold'>Home</a>
          <a href="#about" className='hover:text-green-600 font-semibold'>About Me</a>
          <a href="#service" className='hover:text-green-600 font-semibold'>Services</a>
          <a href="#project" className='hover:text-green-600 font-semibold'>Projects</a>
          <a href="#contact" className='hover:text-green-600 font-semibold'>Contact</a>
        </div>
        <a href="#contact" className='hover:text-gray-400'>
          <button id='#contact' className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 hover:text-white px-4 py-2 text-black font-semibold rounded-full'>Connect Me</button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar