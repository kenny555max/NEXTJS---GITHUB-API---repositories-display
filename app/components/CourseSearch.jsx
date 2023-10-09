import React from 'react';
import { useState } from 'react';

import homeStyles from '@/app/home.module.css';

const Course = ({ getSearchResults }) => {
    const [search, set_search] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        const results = await fetch(`http://localhost:3000/api/courses/search?query=${search}`);
        
        const courses = await results.json();

        getSearchResults(courses);

        set_search('');
    }

    return (
        <form onSubmit={onSubmit} className={homeStyles.search_for_course}>
            <input
                type="text"
                value={search}
                onChange={(e) => set_search(e.target.value)}
                className={homeStyles.search_for_course_input}
                placeholder="Search Courses........."
            />
            <button className={homeStyles.search_for_course_button} type="submit">Search</button>
        </form>
    )
}

export default Course;