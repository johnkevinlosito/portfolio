import React from 'react'
import Section from './Section'
import Image from 'next/image'
import { portfolio } from '../data/config'

const Portfolio = () => {
  return (
    <Section class="-mt-24">
      <div className="w-full pb-2">
        <div className="flex justify-around items-center flex-wrap gap-4">
          {portfolio.map(project => (
            <a href={project.url}
              target="_blank"
              rel="noreferrer" className="flex flex-col text-white dark:text-gray-800 rounded-lg overflow-hidden shadow-lg" key={project.description} >
              <div className="h-48 md:h-64 block overflow-hidden relative">
                <Image src={project.image} loading="lazy" className="w-full h-full object-cover object-center absolute inset-0 transform hover:scale-110 transition duration-200" layout="fill" alt={project.description} />
              </div>

              <div className="flex flex-col flex-1 items-center justify-center p-4 bg-gray-900 dark:bg-white">
                <p className="text-white dark:text-gray-800">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </Section>
  )
}

export default Portfolio
