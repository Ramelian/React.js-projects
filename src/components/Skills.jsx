import React from 'react';
import github from '../assets/github.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import mysql from '../assets/mysql.png';
import reactjs from '../assets/react.png';
import php from '../assets/php.png';
import python from '../assets/python.png'



function Skills() {
  return (
    <div name='experience' className='max-w-4xl mx-auto px-7 mb-24 md:pt-28 md:mb-0 md:h-screen'>
        <h1 className='text-slate-200 text-4xl w-fit border-b-4 border-violet-600 pb-2 rounded-sm mb-10'>
            Tech Skills
        </h1>
        <p className='text-slate-300'>
            Technologies, that I worked with in Web Development. Also C++ used for learning Data Structures, OOP.<br></br>
            By the way, this website is built using React.js and Tailwind framework. 
        </p>
        <div className='w-full mx-auto grid grid-cols-2 gap-4 justify-between sm:grid-cols-4 py-8'>
            <div className='flex flex-col justify-center items-center gap-y-2 shadow-md shadow-b-black p-4 hover:scale-125 duration-300'>
                <img src={html} alt="html" className='w-24' />
                <h3 className='text-slate-300 text-lg'>HTML</h3>
            </div> 
            <div className='flex flex-col justify-center items-center gap-y-2 shadow-md shadow-b-black p-4 hover:scale-125 duration-300'>
                <img src={css} alt="html" className='w-24' />
                <h3 className='text-slate-300 text-lg'>CSS</h3>
            </div> 
            <div className='flex flex-col justify-center items-center gap-y-2 shadow-md shadow-b-black p-4 hover:scale-125 duration-300'>
                <img src={javascript} alt="html" className='w-24' />
                <h3 className='text-slate-300 text-lg'>JavaScript</h3>
            </div> 
            <div className='flex flex-col justify-center items-center gap-y-2 shadow-md shadow-b-black p-4 hover:scale-125 duration-300'>
                <img src={reactjs} alt="html" className='w-24' />
                <h3 className='text-slate-300 text-lg'>React</h3>
            </div> 
            <div className='flex flex-col justify-center items-center gap-y-2 shadow-md shadow-b-black p-4 hover:scale-125 duration-300'>
                <img src={php} alt="html" className='w-24 py-6' />
                <h3 className='text-slate-300 text-lg'>PHP</h3>
            </div> 
            <div className='flex flex-col justify-center items-center gap-y-2 shadow-md shadow-b-black p-4 hover:scale-125 duration-300'>
                <img src={mysql} alt="html" className='w-24' />
                <h3 className='text-slate-300 text-lg'>MySQl</h3>
            </div> 
            <div className='flex flex-col justify-center items-center gap-y-2 shadow-md shadow-b-black p-4 hover:scale-125 duration-300'>
                <img src={github} alt="html" className='w-24' />
                <h3 className='text-slate-300 text-lg'>GitHub</h3>
            </div> 
            <div className='flex flex-col justify-center items-center gap-y-2 shadow-md shadow-b-black p-4 hover:scale-125 duration-300'>
                <img src={python} alt="html" className='w-24' />
                <h3 className='text-slate-300 text-lg'>Python</h3>
            </div> 
          
        </div>
    </div>
  )
}

export default Skills