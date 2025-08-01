import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import { useParams, useNavigate } from 'react-router-dom'
import CourseCard from '../../components/student/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'

const CourseList = () => {
  const { allCourses, fetchAllCourses } = useContext(AppContext)
  const { input } = useParams()
  const navigate = useNavigate()
  const [filteredCourse, setFilteredCourse] = useState([])

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()
      input
        ? setFilteredCourse(
            tempCourses.filter(item =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourse(tempCourses)
    }
  }, [allCourses, input])

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left min-h-[80vh]'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-500'>
              <span
                className='text-blue-600 cursor-pointer'
                onClick={() => navigate('/')}
              >
                Home
              </span>{' '}
              / <span>Course List</span>
            </p>
          </div>
          <SearchBar data={input} />
        </div>

        {/* Clear search chip */}
        {input && (
          <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600'>
            <p>{input}</p>
            <img
              src={assets.cross_icon}
              alt="Clear"
              className='cursor-pointer'
              onClick={() => navigate('/course-list')}
            />
          </div>
        )}

        {/* No Courses or No Match */}
        {allCourses.length === 0 ? (
          <div className='mt-20 text-center text-gray-500'>
            <p>No courses available.</p>
            <button
              onClick={fetchAllCourses}
              className="mt-4 px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
            >
              Retry Fetch Courses
            </button>
          </div>
        ) : filteredCourse.length === 0 ? (
          <p className='mt-20 text-center text-gray-500'>
            No courses matched your search.
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
            {filteredCourse.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  )
}

export default CourseList
