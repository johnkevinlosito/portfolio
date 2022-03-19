import React from 'react'
import Section from './Section'
import { githubUsername } from '../data/config'
import useSWR from 'swr'
import { GoStar, GoRepoForked, GoLinkExternal } from 'react-icons/go'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Repositories = () => {
  const { data, error } = useSWR(`https://api.github.com/users/${githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`
    , fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Section>
      <h1 className="text-4xl font-bold mb-6">Latest GitHub Repositories</h1>

      {error && <div className=" flex justify-center items-center">
        <p>Unable to fetch data, please try refreshing the page.</p>
      </div>}
      {(!error && !data) && (<div className=" flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
        <p className="mt-4">Please wait while fetching the data...</p>
      </div>)}
      <div className="divide-y-1">
        {data && data.map(repo => (
          <div className="py-3 text-lg space-y-2" key={repo.name}>
            <div className="flex flex-row justify-between items-start">
              <a
                className='font-bold'
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {repo.name}
              </a>
              <div className="flex gap-1 items-center">
                {repo.fork && <GoRepoForked />}
                <GoStar /> {repo.stargazers_count}
              </div>
            </div>

            <div className='break-all'>{repo.description}</div>
            <div className="text-xs">
              Updated: {new Date(repo.updated_at).toUTCString()}
            </div>

          </div>
        ))}
        <div className="flex flex-row justify-end items-center py-3">
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="flex gap-1 items-center"
          >
            See all my repositories
            <GoLinkExternal />
          </a>
        </div>
      </div>
    </Section>
  )
}


export default Repositories
