
import React from 'react'

export default function Nav() {
    return (
        <>
            <nav className='bg-gray-800 max-w-screen-lg mx-auto py-5 border-b border-gray-300'>
                <div className='flex justify-center md:justify-between items-center'>
                    <div>
                        <ul className='flex text-white space-x-8 text-xl'>
                            <li><a href="#" className='hover:underline'>Link 1</a></li>
                            <li><a href="#" className='hover:underline'>Link 2</a></li>
                            <li><a href="#" className='hover:underline'>Link 3</a></li>
                            <li><a href="#" className='hover:underline'>Link 4</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:flex space-x-3 items-center'>
                        <button className='text-white bg-gray-800 border-2 border-white hover:bg-white hover:text-black text-lg px-4 py-1.5 rounded-md'>Github</button>
                    </div>
                </div>
            </nav>
        </>
    )
}