'use client';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';

import Courses from './components/Courses';
import CourseSearch from './components/CourseSearch';
import Loading from '@/app/loading';

import homeStyles from './home.module.css';

export default async function Home() {
  const [courses, set_courses] = useState([]);
  const [loading, set_loading] = useState(true);

  useEffect(() => {
    const fetch_courses = async () => {
      const response = await fetch('http://localhost:3000/api/courses/');

      const courses = await response.json();

      set_courses(courses);

      set_loading(false);
    }

    fetch_courses();
  },[]);

  if (loading) {
    return <Loading />
  }

  return (
    <div className='home'>
      <div className="title">
        <h2 className={homeStyles.title}>Welcome To Traversy Media</h2>
      </div>
      <CourseSearch
        getSearchResults={(results) => set_courses(results)}
      />
        <Courses courses={courses} />
    </div>
  )
}