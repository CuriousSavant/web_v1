//@ts-ignore
import React from 'react'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Hero from './Components/Hero'

export default function App() {
  return (
    <>
      <div className='bg-gray-800 font-IPM'>
        <Nav />
        <Hero  />
        <Footer />
      </div>
    </>
  )
}
