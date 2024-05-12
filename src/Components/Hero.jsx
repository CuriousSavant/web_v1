import React from 'react'

export default function Hero() {
  return (
    <>
      <section className='bg-gray-800 max-w-screen-lg mx-auto border-b border-gray-200'>
        <div className='flex flex-col-reverse md:flex-row py-16 mx-auto'>
          <div className='md:w-1/2 md:pr-8'>
            <div className='self-center'>
              <h1 className='mb-4 max-w-2xl text-6xl font-extrabold leading-none bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-600' style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                This is my first work.
              </h1>
              <p className='mb-8 max-w-2xl font-light text-white text-xl'>
                This website took me 4 hours to make, so there's only one page.
              </p>
              <div className='flex md:block justify-center items-center'>
                <a href="#" className='inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300'>
                  Button
                </a>
                <a href="#" className='inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-gray-900 rounded-lg bg-gray-100 focus:ring-4 focus:ring-gray-300'>
                  Button
                </a>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 hidden md:flex'>
            <img className='mx-auto' src="../public/social.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
