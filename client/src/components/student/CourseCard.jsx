import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);
  const discountedPrice = (course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2);

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
      className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200'
    >
      <img className='w-full h-48 object-cover' src={course.courseThumbnail} alt="Course Thumbnail" />
      
      <div className='p-3 text-left space-y-1'>
        <h3 className='text-base font-semibold text-gray-800'>{course.courseTitle}</h3>
        <p className='text-sm text-gray-500'>{course.educator.name}</p>

        <div className='flex items-center gap-2 text-sm'>
          <span>{calculateRating(course).toFixed(1)}</span>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}
                alt="Rating star"
                className='w-3.5 h-3.5'
              />
            ))}
          </div>
          <span className='text-gray-400'>({course.courseRatings.length})</span>
        </div>

        <p className='text-base font-semibold text-gray-800'>
          {currency}{discountedPrice}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
