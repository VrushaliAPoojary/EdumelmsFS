import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='relative bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>

        {/* Logo + Description */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo_dark} alt="Logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>
            Empowering learners with quality content, personalized learning paths, and opportunities to excel.
          </p>
        </div>

        {/* Company Links */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col flex-wrap justify-between w-full text-sm text-white/80 space-y-2 md:space-y-2'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Subscribe section (now visible on mobile too) */}
        <div className='flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Subscribe</h2>
          <p className='text-sm text-white/80'>
            Get the latest updates and offers straight to your inbox.
          </p>
          <form className='flex items-center gap-2 pt-4 w-full flex-wrap'>
            <input
              type="email"
              placeholder='Enter your email'
              className='border border-gray-500/30 bg-gray-800 text-gray-200 placeholder-gray-500 outline-none w-full md:w-64 h-9 rounded px-2 text-sm mb-2 md:mb-0'
            />
            <button type="submit" className='bg-blue-600 w-full md:w-24 h-9 text-white rounded'>
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Line */}
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>
        © 2026 EDUMELMS. All rights reserved.
      </p>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className='absolute right-6 bottom-6 bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded shadow-md transition-all duration-200'
      >
        ↑ Top
      </button>
    </footer>
  )
}

export default Footer
