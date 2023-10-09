import React from 'react';
import Link from 'next/link';

import homeStyles from '@/app/home.module.css';

const Courses = ({ courses }) => {
    return (
        <div className={homeStyles.courses}>
            {courses.map((course) => {
                return <div key={course.id} className={homeStyles.course}>
                    <h3>{course.title}</h3>
                    <small>Level: {course.level}</small>
                    <h5>{course.description}</h5>
                    <Link className={homeStyles.course_button} href={course.link} target='_blank'>go to course</Link>
                </div>
            })}
        </div>
    )
}

export default Courses