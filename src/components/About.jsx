import React from 'react';

function About() {
  return (
    <div name='about' className='max-w-4xl mx-auto px-7 mb-24 md:pt-36 md:mb-0 md:h-screen'>
        <h1 className='text-slate-200 text-4xl mx-auto w-fit border-b-4 border-violet-600 pb-1 rounded-sm mb-10'>About Me</h1>
        <div className='flex justify-between'>
            <p className="w-[49%] font-bold text-right text-3xl text-slate-300" > Hi! Nice to meet you and Welcome to my website!</p>

            <p className="w-[49%] font-bold text-slate-400" >
                I am 19 y.o. and successfully finishing my 5th semester majoring in Computer Science at the Igor Sikorsky Kyiv Polytechnic Institute. But, due to the war my family and I had to fleed out to the Germany. I currently live in Darmstadt and open to all your questions and cooperation propositions!
            
            </p>
        </div>
    </div>
  )
}

export default About