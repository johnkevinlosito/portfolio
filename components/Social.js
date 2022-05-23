import React from 'react'
import { social } from '../data/config'
import { FaGithub, FaLinkedin, FaDev, FaTwitter } from 'react-icons/fa'

const Social = () => {
  return (
    <>
      <p className="text-base leading-7 font-bold">Social links:</p>
      <div className="my-6 flex flex-wrap pt-2 font-medium lg:pt-0">
        <a
          href={social.twitter}
          className={"transition-colors hover:text-gray-600 sm:mx-2 mx-1 sm:my-2 my-1"}
          target="_blank"
          rel="noreferrer"
          title='Twitter'
        >
          <FaTwitter size="32" />
        </a>
        <a
          href={social.linkedin}
          className={"transition-colors hover:text-gray-600 sm:mx-2 mx-1 sm:my-2 my-1"}
          target="_blank"
          rel="noreferrer"
          title='LinkedIn'
        >
          <FaLinkedin size="32" />
        </a>
        <a
          href={social.github}
          className={"transition-colors hover:text-gray-600 sm:mx-2 mx-1 sm:my-2 my-1"}
          target="_blank"
          rel="noreferrer"
          title='GitHub'
        >
          <FaGithub size="32" />
        </a>
        <a
          href={social.devto}
          className={"transition-colors hover:text-gray-600 sm:mx-2 mx-1 sm:my-2 my-1"}
          target="_blank"
          rel="noreferrer"
          title='DEV.to'
        >
          <FaDev size="32" />
        </a>
      </div>
    </>
  )
}

export default Social
