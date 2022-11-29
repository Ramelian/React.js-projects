import React, {useState, Component } from 'react';
import {
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
    FaBars,
    FaTimes,
    FaGithub,
    FaPhoneAlt
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { Link } from 'react-scroll';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }

  return (
    <>
    <div className='fixed w-full h-[80px] flex items-center text-gray-300 pt-5 z-30'>
        <ul className='hidden md:flex mx-auto '>
            <li className='hover:text-white transition duration-100'>
            <Link to="introduction" smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li className='hover:text-white transition duration-100'>
            <Link to="about" smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li className='hover:text-white transition duration-100'>
            <Link to="experience" smooth={true} duration={500}>
                Experience
            </Link>
            </li>
            <li className='hover:text-white transition duration-100'>
            <Link to="work" smooth={true} duration={500}>
                Work
            </Link>
            </li>
            <li className='hover:text-white transition duration-100'>
            <Link to="contact" smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>

        <div onClick={handleClick}
             className='md:hidden ml-auto mr-5 z-10' >
                {!nav ? <FaBars size={25}/> : <FaTimes size={25}/> }            
        </div>

        <ul className= {`absolute flex flex-col space-y-10 items-center justify-center ${!nav ? 'left-[100%]' : 'left-0'} top-0 w-full h-screen bg-gradient-to-br from-[#32206b] to-[#301934] transition-left duration-500 md:hidden` }>
            <li className='hover:text-white transition duration-100'>
            <Link to="introduction" smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li className='hover:text-white transition duration-100'>
            <Link to="about" smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li className='hover:text-white transition duration-100'>
            <Link to="experience" smooth={true} duration={500}>
                Experience
            </Link>
            </li>
            <li className='hover:text-white transition duration-100'>
            <Link to="work" smooth={true} duration={500}>
                Work
            </Link>
            </li>
            <li className='hover:text-white transition duration-100'>
            <Link to="contact" smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>
    </div>

    <div className='hidden lg:flex fixed top-[40%] right-0'>
        <ul className='w-32'>
            <li className='w-32 p-2 rounded-l-lg bg-[#0A66C2] cursor-pointer mb-1 ml-[80px] hover:ml-0 duration-300'>
                <a href="https://www.linkedin.com/in/ramin-aliiev-224220244" target="_blank" className='flex items-center justify-between w-full text-white '>
                    < FaLinkedin size={25} className=""/> LinkedIn
                </a>
           </li>
           <li className='w-32 p-2 rounded-l-lg bg-[#171515] cursor-pointer mb-1 ml-[80px] hover:ml-0 duration-300'>
                <a href="https://github.com/Ramelian" target="_blank" className='flex items-center justify-between w-full text-white '>
                    < FaGithub size={25}/> GitHub
                </a>
           </li>
           <li className='w-[300px] p-2 rounded-l-lg bg-[#9a724a] cursor-pointer mb-1 ml-[80px] hover:ml-[-170px] duration-500'>
                <div className='flex items-center justify-between w-full text-white '>
                    < HiOutlineMail size={25}/> ramin.aliiev2022@gmail.com
                </div>
           </li>
           <li className='w-56 p-2 rounded-l-lg bg-green-600 cursor-pointer mb-1 ml-[80px] hover:ml-[-90px] duration-300'>
                <div className='flex items-center justify-between w-full text-white '>
                    < FaPhoneAlt size={25}/> +491725607741
                </div>
           </li>
        </ul>
        
    </div>
    </>
  )
}
