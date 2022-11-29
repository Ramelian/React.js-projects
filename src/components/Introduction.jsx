import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Introduction() {
  return (
    <div name='introduction' className='max-w-4xl mx-auto px-7 flex flex-col pt-32 mb-24 md:mb-0 lg:pt-52 md:h-screen'>
        <h1 className='text-white text-5xl mb-3'>Ramin Aliiev</h1>
        <h2 className='text-slate-300 text-4xl mb-2'>Front End/Full Stack Developer</h2>
        <p className='text-slate-400 max-w-2xl mb-5'>I am a third-year computer science student at the top technical university in Ukraine and I'm passionate about creating and building websites using modern technologies.</p>
        <Link to="work" smooth={true} duration={500}>
        <button className='text-white w-fit flex items-center px-3 py-2 border border-white group hover:bg-violet-800 hover:border-transparent transition duration-200'>
        <span className='mr-2'>My Work</span>
            <HiArrowNarrowRight className='group-hover:rotate-90 transition duration-300'/>
        </button>
        </Link>

    </div>
  )
}

export default Introduction;