import React from 'react'

function Contact() {
  return (
    <div name='contact' className='max-w-4xl mx-auto px-7 flex flex-col justify-center md:pt-32 pb-16 md:pb-16 lg:pt-52 md:h-screen'>
        <h1 className='text-slate-200 text-4xl w-fit border-b-4 border-violet-600 pb-2 rounded-sm mb-5'>
            Contact
        </h1>
        <p className='text-slate-300 mb-6'>
            Submit the form below or just send directly to ramin.aliiev2022@gmail.com
        </p>
        <form action="https://getform.io/f/d314df9c-6a75-4256-8b28-7d0e21d75c8d" method='POST' className='flex flex-col'>
            <input type="text" placeholder='Your Name' name='name' className='px-5 py-2 outline-none rounded-md mb-2 bg-slate-300'></input>
            <input type="email" placeholder='Your Email' name='email' className='px-5 py-2 outline-none rounded-md mb-6 bg-slate-300'></input>
            <textarea placeholder='Enter text' name='message' rows='12' className='h-56 rounded-md px-3 py-3 bg-slate-300 mb-6 outline-none'></textarea>
            <button className='text-white w-fit flex items-center px-3 py-2 border border-white group hover:bg-violet-800 hover:border-transparent transition duration-200'>
                Contact Me!
        </button>
        </form>
    </div>
  )
}

export default Contact