import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/educator/Navbar'
import Sidebar from '../../components/educator/Sidebar'
import Footer from '../../components/educator/Footer'

const Educator = () => {
  return (
    <div className='flex flex-col min-h-screen text-default bg-white'>
      <Navbar />
      
      <div className='flex flex-1'>
        <Sidebar />
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Educator
