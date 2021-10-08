import React from 'react'

const About = ({ text }) => {
  return (
    <div className="text-gray-800 dark:text-white flex flex-col md:flex-50 px-4 pb-6">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      <p className="text-base">{text}</p>
    </div>
  )
}

export default About
