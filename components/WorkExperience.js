import React from 'react'
import Job from './Job'
import Section from './Section'
import experience from '../data/work'

const WorkExperience = () => {
    return (
        <Section>
            <h2 className='text-4xl font-bold mb-6'>Experience</h2>
            <div className='relative container mx-auto px-6'></div>
            <div className='relative mx-6 flex flex-col gap-5'>
                <div className='absolute w-1px h-full bg-gray-900 dark:bg-white shadow-md top-0 left-0' ></div>
                {experience.map((job, index) => <Job {...job} key={index} />)}
            </div>
        </Section>
    )
}

export default WorkExperience