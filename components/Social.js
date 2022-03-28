import React from 'react'
import { social } from '../data/config'
import { FaGithub, FaLinkedin, FaDev, FaTwitter } from 'react-icons/fa'

const Social = () => {
  return (
    <>
      <p className="text-base leading-7 font-bold">Social links:</p>
      <div className="my-6 flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
        <a
          href={social.twitter}
          className={"transition-colors hover:text-gray-600"}
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size="32" />
        </a>
        <a
          href={social.linkedin}
          className={"transition-colors hover:text-gray-600"}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size="32" />
        </a>
        <a
          href={social.github}
          className={"transition-colors hover:text-gray-600"}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size="32" />
        </a>
        <a
          href={social.devto}
          className={"transition-colors hover:text-gray-600"}
          target="_blank"
          rel="noreferrer"
        >
          <FaDev size="32" />
        </a>
      </div>
    </>
  )
}

export default Social
