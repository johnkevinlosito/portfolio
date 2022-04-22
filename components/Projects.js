import React from 'react'
import Section from './Section'
import { projects } from '../data/projects'
import ProjectLink from './ProjectLink'

const Projects = () => {
  return (
    <Section>
      <h2 className='text-4xl font-bold mb-6'>Projects</h2>
      <div className='space-y-10'>
        {projects.map((project, index) => (
          <div className={`container mx-auto pt-10 flex flex-col ${(index + 1) % 2 === 1 ? 'md:flex-row' : 'md:flex-row-reverse'}`} key={`project${index}`}>
            <div className=''>
              <img src={project.image} loading='lazy' layout='fill' alt={project.name} />
            </div>
            <div className='px-2 md:px-10 text-base leading-7 space-y-5'>
              <h3 className='text-3xl font-bold'>{project.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: project.description }} className='content' />
              <p><b>Technologies:</b> {project.tech.join(', ')}</p>
              <div className='flex flex-col md:flex-row items-start py-3 gap-2'>
                {project.url && <ProjectLink link={project.url} type='url' />}
                {project.github && <ProjectLink link={project.github} type='repo' />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section >
  )
}

export default Projects
