import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Dashboard from './pages/educator/Dashboard'
import Navbar from './components/educator/Navbar'
import "quill/dist/quill.snow.css";

const App = () => {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'>
      {isEducatorRoute && <Navbar />}
      <Routes>
        {/* Student Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />

        {/* Educator Routes with nested children */}
        <Route path='/educator' element={<Educator />}>
          <Route index element={<Dashboard />} /> {/* Default child at /educator */}
          <Route path='add-course' element={<AddCourse />} /> {/* /educator/add-course */}
          <Route path='my-courses' element={<MyCourses />} /> {/* /educator/my-courses */}
          <Route path='student-enrolled' element={<StudentsEnrolled />} /> {/* /educator/student-enrolled */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
