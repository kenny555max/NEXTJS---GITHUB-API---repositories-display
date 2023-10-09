import Link from "next/link";

import homeStyles from '../../home.module.css';

import { FaStar, FaEye, FaCodeBranch } from "react-icons/fa";

const repos_func = async () => {
    const response = await fetch('https://api.github.com/users/bradtraversy/repos', {
        next: {
            revalidate: 60 * 60 * 24
        }
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const repos = response.json();

    return repos;
}

const Code_Page = async () => {
    const repos = await repos_func();

    return (
        <div className={homeStyles.courses}>
            {repos.map((repo) => {
                return <Link key={repo.id} href={`/code/repos/${repo.name}`} className={homeStyles.course}>
                    <h3>{repo.name}</h3>
                    <h2>{repo.description}</h2>
                    <div className={homeStyles.repo_details}>
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
                </Link>
            })}
        </div>
    )
}

export default Code_Page;