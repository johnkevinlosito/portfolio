import React from 'react'
import Section from './Section'
import { portfolio } from '../data/config'

const Portfolio = () => {
  return (
    <Section class="-mt-24">
      <div className="w-full pb-2">
        <div className="flex justify-around items-center flex-wrap gap-6">
          {portfolio.map(project => (
            <div key={project.description} className="flex justify-center items-center text-center">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <img src={project.image} className="max-w-220px object-cover object-center rounded-lg mx-auto mb-4" />
                <p>{project.description}</p>
              </a>
            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}

export default Portfolio
