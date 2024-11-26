/* eslint-disable react/prop-types */
import React from 'react'
import { RiMenuUnfold2Line, RiMenuUnfoldLine } from "react-icons/ri";

const  HorizontalNavBar = ({toggleSideNav,isMenuOpen}) => {
  return (
    <nav className='sm:block w-full bg-green-100 fixed z-10 top-0 flex justify-between items-center'>
      <div className='w-full py-3 flex justify-around items-center'>
      <div className='w-full sm:w-1/5 app-logo  flex justify-between items-center '>
        <span className='pr-4 block md:hidden lg:hidden xs:pl-2 w-1/5 text-black ml-4 sm:ml-0 text-3xl' onClick={toggleSideNav}>{!isMenuOpen ? <RiMenuUnfoldLine /> : <RiMenuUnfold2Line />}</span>
        <div className='flex w-4/5 items-center sm:ml-16'>
          <div className='text-2xl font-bold  bg-clip-text bg-gradient-to-r from-green-700 to-blue-700 text-transparent'>Madhu Sudhakar</div>
        </div>
      </div>
       
        <div className='space-x-6 text-lg hidden sm:inline'>
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

export default HorizontalNavBar