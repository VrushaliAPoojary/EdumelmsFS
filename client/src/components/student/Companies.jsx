import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-16 text-center'>
      <p className='text-base text-gray-500'>Trusted by learners from</p>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 mt-6 md:mt-10'>
        <figure>
          <img src={assets.microsoft_logo} alt="Microsoft" className='w-20 md:w-28' loading="lazy" />
        </figure>
        <figure>
          <img src={assets.walmart_logo} alt="Walmart" className='w-20 md:w-28' loading="lazy" />
        </figure>
        <figure>
          <img src={assets.accenture_logo} alt="Accenture" className='w-20 md:w-28' loading="lazy" />
        </figure>
        <figure>
          <img src={assets.adobe_logo} alt="Adobe" className='w-20 md:w-28' loading="lazy" />
        </figure>
        <figure>
          <img src={assets.paypal_logo} alt="PayPal" className='w-20 md:w-28' loading="lazy" />
        </figure>
      </div>
    </div>
  )
}

export default Companies
