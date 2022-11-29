import React from 'react'
import toDO from '../assets/todo.jpg';
import weather from '../assets/weather.jpg';
import breakout from '../assets/breakout.jpg';
import jewelery from '../assets/jewelery.jpg';

function Work() {
  return (
    <div name='work' className='max-w-4xl mx-auto px-7 pb-32 md:pt-24 xs:h-fit md:h-screen'>
         <h1 className='text-slate-200 text-4xl w-fit border-b-4 border-violet-600 pb-2 rounded-sm mb-5'>
            Projects
        </h1>
        <p className='text-slate-300 mb-6'>
            My recent projects: 1 Full Stack e-commerce with PHP and MySQL, 1 Front End with React JS, 2 Vanilla JS.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 z-0'>
        <div className='relative h-[250px] bg-cover bg-no-repeat bg-center rounded-xl' style={{ backgroundImage: `url(${jewelery})` }}>
                <div className='flex flex-col items-center absolute inset-0 workItem group opacity-0 hover:opacity-100 transition duration-300'>
                    <h1 className='text-lg text-center font-bold text-white my-8'>Full Stack Jewelery Shop<br></br>&#40;Only functional blocks like shop, product description, checkout, sign up/in&#41;</h1>
                    <div className='flex'>
                        <a href="https://jewelery-e-commerce.000webhostapp.com/jewelery_shop/PHP/index.php" target="_blank" className='bg-white px-7 py-3 rounded-lg font-bold text-md mr-16'>Demo</a>
                        <a href="https://github.com/Ramelian/project_jewelery_shop" target="_blank" className='bg-white px-7 py-3 rounded-lg font-bold text-md'>Code</a>
                    </div>
                </div>
            </div>
            <div className='relative h-[250px] bg-cover bg-no-repeat bg-center rounded-xl' style={{ backgroundImage: `url(${weather})` }}>
                    <div className='flex flex-col items-center absolute inset-0 workItem group opacity-0 hover:opacity-100 transition duration-300'>
                        <h1 className='text-lg font-bold text-white my-16'>React JS Weather App</h1>
                        <div className='flex'>
                            <a href="https://remarkable-banoffee-87107a.netlify.app/" target="_blank" className='bg-white px-7 py-3 rounded-lg font-bold text-md mr-16'>Demo</a>
                            <a href="https://github.com/Ramelian/React.js-projects" target="_blank" className='bg-white px-7 py-3 rounded-lg font-bold text-md'>Code</a>
                        </div>
                    </div>
            </div>
            <div className='relative h-[250px] bg-cover bg-no-repeat bg-center rounded-xl' style={{ backgroundImage: `url(${toDO})` }}>
                    <div className='flex flex-col items-center absolute inset-0 workItem group opacity-0 hover:opacity-100 transition duration-300'>
                        <h1 className='text-lg font-bold text-white my-16'>Vanilla js to DO App</h1>
                        <div className='flex'>
                            <a href="https://golden-otter-630e08.netlify.app" target="_blank" className='bg-white px-7 py-3 rounded-lg font-bold text-md mr-16'>Demo</a>
                            <a href="https://github.com/Ramelian/Javascript-Projects/tree/main/vanilla_projects/toDoList" target="_blank" className='bg-white px-7 py-3 rounded-lg font-bold text-md'>Code</a>
                        </div>
                    </div>
            </div>
            <div className='relative h-[250px] bg-cover bg-no-repeat bg-center rounded-xl' style={{ backgroundImage: `url(${breakout})` }}>
                    <div className='flex flex-col items-center absolute inset-0 workItem group opacity-0 hover:opacity-100 transition duration-300'>
                        <h1 className='text-lg font-bold text-white my-16'>Vanilla js Breakout game</h1>
                        <div className='flex'>
                            <a href="https://sprightly-mochi-344c17.netlify.app" target="_blank" className='bg-white px-7 py-3 rounded-lg font-bold text-md mr-16'>Demo</a>
                            <a href="https://github.com/Ramelian/Javascript-Projects/tree/main/vanilla_projects/breakout" target="_blank" className='bg-white px-7 py-3 rounded-lg font-bold text-md'>Code</a>
                        </div>
                    </div>
            </div>
        </div>
        
    </div>
  )
}

export default Work