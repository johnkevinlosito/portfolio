import React from 'react'
import Section from './Section'
import { credly } from '../data/config'

const Certificates = () => {
  return (
    <Section>
      <h1 className="text-4xl font-bold mb-6">Certificates</h1>
      <div className="flex justify-center items-center flex-wrap">
        {credly.map(item => (
          <iframe key={item.badge} name="acclaim-badge" allowtransparency="true" frameBorder="0" id={`embedded-badge-${item.badge}`} scrolling="no" src={`//www.credly.com/embedded_badge/${item.badge}`} style={{ width: '240px', height: '270px', margin: '5px' }} title="View my verified achievement on Credly." className="bg-white"></iframe>
        ))
        }
      </div>
    </Section>
  )
}

export default Certificates
