import React from 'react'
import SkillBadge from './Skillbadge'

const Skills = ({ title, skills }) => {
  return (
    <div className="text-gray-800 dark:text-white flex flex-col md:flex-50 px-4 pb-6">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      {skills.map(skill => (
        <div className="mb-4" key={skill.category}>
          <h4 className="mb-2 text-lg font-bold" key={skill.category}>{skill.category}</h4>
          {skill.skillList.map(list => <SkillBadge key={list.name} name={list.name} />)

          }
        </div>
      ))}
    </div>
  )
}

export default Skills
