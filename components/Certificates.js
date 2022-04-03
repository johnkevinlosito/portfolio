import React from 'react'
import Section from './Section'
import { credly } from '../data/config'

const Certificates = () => {
  return (
    <Section>
      <h2 className='text-4xl font-bold mb-6'>Certificates</h2>
      <div>
        {credly.map(item => (
          <div className='py-3 text-lg space-y-2' key={item.title}>
            <a href={item.badgeUrl} target='_blank' rel='noreferrer' className='font-bold hover:underline'>{item.title}</a>
          </div>
        ))
        }
      </div>
    </Section>
  )
}

export default Certificates
