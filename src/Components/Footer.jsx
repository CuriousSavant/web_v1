import React from 'react'
import { Instagram, Twitter, GitHub } from '@mui/icons-material'

export default function Footer() {
  return (
    <footer className='max-w-screen-lg bg-gray-800 mx-auto text-white'>
      {/* header */}
      <section className='py-4 px-6 flex justify-between items-center'>
        <div className='flex space-x-3 items-center'>
          <img src="./public/terminal.svg" className='w-5 h-5 md:w-7 md:h-7' />
          <h3 className='text-lg md:text-2xl font-semibold'>Header</h3>
        </div>

      <div className='hidden lg:block py-1 bg-gradient-to-r from-sky-500 via-indigo-300 to-pink-500 w-[300px] rounded-full mx-auto hover:w-[600px] transition-all duration-150 ease-in cursor-pointer'></div>

        <div className='flex space-x-4'>
          <a href="#" className='hover:text-gray-400'><Instagram /></a>
          <a href="#" className='hover:text-gray-400'><Twitter /></a>
          <a href="#" className='hover:text-gray-400'><GitHub /></a>
        </div>
      </section>
      {/* main contents */}
      <main className='grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 px-3 sm:px-6 sm:place-items-center sm:items-baseline border-b border-gray-200'>
        <div className='col-span-2 md:col-span-1'>
          <h3 className='text-3xl font-semibold'>Title</h3>
          <p className='text-base md:text-base leading-[1.9] pt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil consequatur corporis aliquam iusto consectetur. Culpa amet explicabo
          </p>
        </div>
        <div>
          <h3 className='mb-5 text-xl font-semibold'>Account</h3>
          <ul className='flex flex-col gap-y-2'>
            <li><a href="#" className='hover:underline'>Link 1</a></li>
            <li><a href="#" className='hover:underline'>Link 2</a></li>
            <li><a href="#" className='hover:underline'>Link 3</a></li>
            <li><a href="#" className='hover:underline'>Link 4</a></li>
          </ul>
        </div>
        <div>
          <h3 className='mb-5 text-xl font-semibold'>Service</h3>
          <ul className='flex flex-col gap-y-2'>
            <li><a href="#" className='hover:underline'>Link 1</a></li>
            <li><a href="#" className='hover:underline'>Link 2</a></li>
            <li><a href="#" className='hover:underline'>Link 3</a></li>
            <li><a href="#" className='hover:underline'>Link 4</a></li>
            <li><a href="#" className='hover:underline'>Link 5</a></li>
          </ul>
        </div>
        <div className='col-span-2 sm:col-span-1'>
          <h3 className='mb-5 text-xl font-semibold'>Contact</h3>
          <ul className='flex flex-col gap-y-2'>
            <li><a href="#" className='hover:underline'>Link 1</a></li>
            <li><a href="#" className='hover:underline'>Link 2</a></li>
            <li><a href="#" className='hover:underline'>Link 3</a></li>
          </ul>
        </div>
      </main>
      {/* Contents end */}
      <section className='py-5'>
        <div className='flex justify-center items-center'>
          <h5>@Description: </h5>
          <a href='#' className='hover:text-gray-300'>More</a>
        </div>
      </section>
    </footer >
  )
}