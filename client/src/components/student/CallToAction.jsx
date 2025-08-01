import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn Anything, Anytime</h1>
      <p className='text-gray-500 sm:text-sm text-center max-w-xl'>
        Explore a wide range of expert-led courses and gain skills that shape your future.
      </p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition'>
          Get Started
        </button>
        <button className='flex items-center gap-2 text-blue-600 hover:underline transition'>
          Learn more <img src={assets.arrow_icon} alt="arrow icon" className='w-4 h-4' />
        </button>
      </div>
    </div>
  )
}

export default CallToAction
