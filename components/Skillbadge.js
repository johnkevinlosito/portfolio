import React from 'react'

const Skillbadge = ({ name }) => {
  return (
    <div className="inline-block mx-1 my-3">
      <span id={`${name}-badge`} className='py-1 px-2 text-sm font-bold text-center bg-gray-800 dark:bg-gray-500 rounded-full text-white'>
        {name}
      </span>
    </div>
  )
}

export default Skillbadge
