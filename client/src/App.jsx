import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import SubscribedCourses from './components/SubscribedCourses';

import { SessionProvider } from './contexts/SessionContext';

const App = () => {
  return (
    <div>
      <SessionProvider>
      <Header />
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/profile" element={<SubscribedCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      </SessionProvider>
    </div>
  );
};

export default App;
