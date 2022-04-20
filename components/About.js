import React from 'react'
import { headline, role, authorDescription } from '../data/config'
import Skills from './Skills'
import Social from './Social'

const About = () => {
  return (
    <div className="text-gray-800 dark:text-white flex flex-col md:flex-50 px-4 space-y-4">
      <h1 className="text-5xl font-bold">{headline}</h1>
      <h2 className='text-2xl font-bold leading-4'>{role}</h2>
      <p className="text-lg leading-7">{authorDescription}</p>
      <Skills />
      <Social />
    </div >
  )
}

export default About
