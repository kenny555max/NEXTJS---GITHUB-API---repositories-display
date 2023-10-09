import Link from 'next/link';
import React from 'react';

const fetchRepoDir = async (name) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`);

  const contents = await response.json();

  const repo_dirs = contents.filter((content) => content.type === 'dir');

  return repo_dirs;
}

const Repo_Dir = async({ name }) => {
  const repo_dirs = await fetchRepoDir(name);

  return (
    <>
      <h1>Directories</h1>
      <ul>
        {repo_dirs.map((dir) => { 
          return <li key={dir.path} style={{ listStyle: 'none' }}>
            <Link href={`/code/repos/${name}/${dir.path}`}>
              {dir.path}
            </Link>
          </li>
        })}
      </ul>
    </>
  )
}

export default Repo_Dir