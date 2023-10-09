import Link from 'next/link';
import React from 'react';
import { Suspense } from 'react';

import Repo_Details from '@/app/components/Repo_Details';
import Repo_Dir from '@/app/components/Repo_Dir';

import homeStyles from '@/app/home.module.css';

const fetchRepo = async (name) => {
    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}`);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const repo = response.json();

    return repo;
}

const page = async ({ params: { name } }) => {
    const repo = await fetchRepo(name);

    return (
        <div className={homeStyles.repo_sec}>
            <Link href='/code/repos' className={homeStyles.back_to_repo}>Back to Repositories</Link>
            <Suspense fallback={<div>Loading Repository details.........</div>}>
                <Repo_Details repo={repo} />
            </Suspense>
            <Suspense fallback={<div style={{ fontWeight: 'bolder' }}>Loading Directories.........</div>}>
                <Repo_Dir name={name} />
            </Suspense>
        </div>
    )
}

export default page