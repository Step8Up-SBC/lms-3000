import React from 'react'

import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
  return (
    <div className="card">
        <div className="card-title">Course Number: {course.id}</div>
        <div className="card-description">Course Title: {course.title}</div>
        <div className="card-options">
          <Link className="button" to={`/course/${course.id}`}>View Details</Link>
          <Link className="button" to={`/course/${course.id}`}>Enroll</Link>
        </div>
    </div>
  )
}

export default CourseCard