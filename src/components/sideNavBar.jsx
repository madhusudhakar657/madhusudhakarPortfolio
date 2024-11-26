/* eslint-disable no-unused-vars */
import React from 'react'
import { FaDesktop, FaFileContract, FaHome, FaHotTub, FaInfoCircle, FaUsers } from 'react-icons/fa';
import { MdOutlineContactPhone, MdSell } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GiChiliPepper } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const SideNavBar = ({ closeToggleSideNav, isMenuOpen }) => {
    return (
        <div onClick={(e) => e.stopPropagation()} className={`sidenav block md:hidden lg:hidden md:w-1/6 lg:w-1/6 w-1/3  ${isMenuOpen ? 'active' : ''}`}>
            <div className='w-full h-16 bg-green-300'>
                <span className='bg-transparent text-black text-2xl mt-1 pr-1 float-right' onClick={closeToggleSideNav} ><IoCloseSharp /></span>
                <img
                    src='assets/aboutme-image.jpg'
                    alt="Chakali Madhu Sudhakar"
                    className='sm:w-52 sm:h-52 w-12 relative top-2  h-12  ml-2 sm:ml-10 rounded-full object-cover shadow-lg transform transition-transform duration-300 hover:scale-105'
                />

                {/* <NavLink to="/login" className={({ isActive }) => `xs:text-base flex justify-center items-center  border-2 xs:pt-5 sm:pt-5 float-left pl-2 border-transparent rounded text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 ${!isActive ? 'text-white' : "text-blue-400"}`}><span className='mr-2 text-2xl'><IoMdContact /></span> Sign In </NavLink> */}
            </div>
            <div className="w-full ml-5 my-3 flex flex-col list-none justify-between items-start app-menu-items">
                <a  onClick={closeToggleSideNav} href="#home" className='text-black my-1 hover:text-green-600 font-semibold'>Home</a>
                <a onClick={closeToggleSideNav} href="#about" className='text-black my-1 hover:text-green-600 font-semibold'>About Me</a>
                <a onClick={closeToggleSideNav} href="#service" className='text-black my-1 hover:text-green-600 font-semibold'>Services</a>
                <a onClick={closeToggleSideNav} href="#project" className='text-black my-1 hover:text-green-600 font-semibold'>Projects</a>
                <a onClick={closeToggleSideNav} href="#contact" className='text-black my-1 hover:text-green-600 font-semibold'>Contact</a>
            </div>
        </div>
    )
}
export default SideNavBar;