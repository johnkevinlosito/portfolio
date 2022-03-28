import React from 'react'
import { skills } from '../data/config'

const Skills = () => {
  return (
    <>
      <p className="text-base leading-7 font-bold">Tech stack:</p>
      <div className="my-6 flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
        {skills.map(skill => (
          <div key={skill.name} className="group relative flex items-center justify-center">
            <i className={`text-[32px] transition-colors hover:text-gray-600 ${skill.icon}`}></i>
            <span className='absolute top-3/4 z-10 w-auto p-2 m-2 min-w-max rounded-md shadow-md text-white bg-gray-800 text-xs font-bold transition-all duration-100 scale-0  group-hover:scale-100'>{skill.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills
