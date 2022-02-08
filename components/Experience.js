import React from 'react'
import Section from './Section'

const Experience = ({ jobs }) => {
  return (
    <Section>
      <h1 className="text-4xl font-bold mb-6">Experience</h1>
      <div className="relative container mx-auto px-6 flex flex-col gap-5">
        <div className="absolute w-1px h-full bg-gray-900 dark:bg-white shadow-md top-0 left-1/2" ></div>
        {jobs.map((job, index) => (
          <div key={job.begin.month + job.begin.year} className="relative">
            <p className="w-16 h-16 p-1 text-white uppercase bg-gray-900 dark:bg-gray-500 font-bold rounded-full shadow-md absolute top-0 left-1/2 transform -translate-x-1/2">
              <span className="block text-center pt-1">{job.begin.month}</span>
              <span className="block text-center">{job.begin.year}</span>
            </p>
            <div className={`mt-20 md:mt-0 relative md:w-1/2 ${(index + 1) % 2 === 1 ? 'md:ml-0 md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`} >
              <div className={`absolute inset-0 h-4 w-4 transform rotate-45 bg-gray-900 dark:bg-gray-500 left-1/2 -translate-x-1/2 md:translate-x-0  -top-1 md:top-5 md:left-26 ${(index + 1) % 2 === 1 ? 'md:left-auto md:right-14' : 'md:left-14'}`} aria-hidden="true"></div>
              <div className="rounded-md border-2 border-gray-900 dark:border-gray-500 overflow-hidden bg-gray-900 dark:bg-gray-500">
                <div className='p-4'>
                  <h2 className="text-xl uppercase text-white font-bold ">{job.company
                    ? `${job.occupation} at ${job.company}`
                    : `${job.occupation}`}
                    <br />
                    <small className='text-xs'>
                      ({!job.end ? 'present' : `${job.begin.month} ${job.begin.year} - ${job.end.month} ${job.end.year}`})
                    </small>
                  </h2>
                </div>
                <div className="space-y-4 bg-white dark:bg-gray-900 ">
                  <p className="px-4 pt-4 text-sm">{job.description}</p>
                  {job.stack && <p className="px-4 pb-4 text-sm"><b>Stack: </b>{job.stack}</p>}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Experience
