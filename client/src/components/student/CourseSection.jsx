import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CourseSection = () => {
  const { allCourses } = useContext(AppContext)

  return (
    <div className='py-16 md:px-40 px-8 text-center'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>
        Discover our top-rated <br /> courses
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:my-16 my-10'>
        {allCourses?.slice(0, 4).map((course, index) => (
          <CourseCard key={course._id || index} course={course} />
        ))}
      </div>

      <Link
        to='/course-list'
        onClick={() => window.scrollTo(0, 0)}
        className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded hover:bg-gray-100 transition'
      >
        Show all courses
      </Link>
    </div>
  )
}

export default CourseSection
