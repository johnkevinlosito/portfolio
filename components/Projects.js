import React from 'react'
import Section from './Section'
import { projects } from '../data/projects'
import ProjectLink from './ProjectLink'

const Projects = () => {
  return (
    <Section>
      <h2 className='text-4xl font-bold mb-6'>Projects</h2>
      <div className='divide-y-1 space-y-10'>
        {projects.map((project, index) => (
          <div className='container mx-auto px-6 pt-10' key={`project${index}`}>
            <h3 className='text-3xl font-bold text-center'>{project.name}</h3>
            <div className='block mb-5'>
              <img src={project.image} loading='lazy' layout='fill' alt={project.name} />
            </div>
            <div className='px-6 md:px-10 text-base leading-7 space-y-5'>
              <p dangerouslySetInnerHTML={{ __html: project.description }} className='content' />
              <p><b>Technologies:</b> {project.tech.join(', ')}</p>
              <div className='flex flex-row items-center py-3 gap-2'>
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
