import React from 'react'
import config from "../data/config"
import { FaGithub, FaLinkedin, FaDev, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="mt-12 lg:mt-18 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-4 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <div className="flex flex-col justify-center lg:justify-between lg:flex-row items-center lg:divide-x text-center">
            <p className="lg:pr-2">{`© ${new Date().getFullYear()} ${config.authorName}`}</p>
            <p className="lg:pl-2">Built with Next.js, Tailwind, Dev.to API and Vercel</p>
          </div>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href={config.social.twitter}
              className={"transition-colors hover:text-blue-400"}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size="24" />
            </a>
            <a
              href={config.social.linkedin}
              className={"transition-colors hover:text-blue-500"}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size="24" />
            </a>
            <a
              href={config.social.github}
              className={"transition-colors hover:text-gray-600"}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size="24" />
            </a>
            <a
              href={config.social.devto}
              className={"transition-colors hover:text-gray-700"}
              target="_blank"
              rel="noreferrer"
            >
              <FaDev size="24" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
