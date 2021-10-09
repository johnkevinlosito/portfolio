import React from 'react'

const Section = (props) => {
  return (
    <section className={`container relative mx-auto py-12 px-4 lg:p-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-md shadow-xs mb-4 ${props.class ? props.class : ''}`}>
      {props.children}
    </section>
  )
}

export default Section
