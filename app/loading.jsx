import React from 'react';

import homeStyles from '@/app/home.module.css';

const loading = () => {
    return (
        <div className='loader'>
            <div className="spinner"></div>
        </div>
    )
}

export default loading;