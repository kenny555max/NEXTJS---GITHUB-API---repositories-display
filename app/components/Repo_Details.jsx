import React from 'react';

import Link from 'next/link';

import homeStyles from '@/app/home.module.css';
import { FaStar, FaEye, FaCodeBranch } from "react-icons/fa";

const Repo_Details = ({ repo }) => {
    return (
        <div className={homeStyles.repo}>
            <h3>{repo.name}</h3>
            <h2>{repo.description}</h2>
            <div className={homeStyles.repo_det}>
                <span>
                    <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                    <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                    <FaEye /> {repo.watchers}
                </span>
            </div>
        </div>
    )
}

export default Repo_Details;