import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const CourseList = () => {
  const [course, setCourse] = useState({});

  const [showDelegates, setShowDelegates] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get(`/api/courses/${id}`);
        console.log(response.data);
        setCourse(response.data.course);
      } catch (error) {
        console.error(`Failed to fetch course with id ${id}`, error);
      }
    };

    fetchCourses();
  }, []);

  const toggleDelegates = () => {
    setShowDelegates(!showDelegates);
  }

  const handleEnroll = () => {
    console.log('Enroll');
  }

  return (
    <div>
      <h2>Course Details {course.id}ID</h2>
      {course.id && (
        <>
        <div className="card">
          <div>Course Number: {course.id}</div>
          <div>Course Title: {course.title}</div>
          <div>Course Description: {course.description}</div>
          <div>Course Category: {course.category.category_name}</div>
          <div>Students Enrolled: {course.users?.length}</div>
          <div className="card-options">
            <button className="button" onClick={() => toggleDelegates()}>View Delegates</button>
            <button className="button" onClick={() => handleEnroll()}>Enroll</button>
          </div>
        </div>

        {showDelegates && (

          <div className="card mt-5">
            <h3>Delegates</h3>
            <div className="delegate-list">
              {course.users.map((user) => (
                <div key={user.id} className="delegate">
                  <div>{user.username}</div>
                  <div>{user.email}</div>
                </div>
              ))}
            </div>
          </div> )
        }
      </>   
      )}
    </div>
  );
};

export default CourseList;
