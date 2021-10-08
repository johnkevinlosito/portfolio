import React from "react"
import Image from "next/image"
import profile from "../public/images/avatar.jpg"
import { FaGithub, FaLinkedin, FaDev, FaTwitter } from "react-icons/fa"
import About from "./About"
import Skills from "./Skills"
import Section from "./Section"

const Intro = ({ description, social, skills }) => {
  return (
    <Section class="-mt-24">
      <div className="w-full flex flex-col items-center justify-center pb-2">
        <Image
          src={profile}
          alt="Profile"
          priority={true}
          className="rounded-full"
          width={200}
          height={200}
          placeholder="blur"
        />
        <div className="m-6 flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
          <a
            href={social.twitter}
            className={"transition-colors hover:text-blue-400"}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size="32" />
          </a>
          <a
            href={social.linkedin}
            className={"transition-colors hover:text-blue-500"}
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
            className={"transition-colors hover:text-gray-700"}
            target="_blank"
            rel="noreferrer"
          >
            <FaDev size="32" />
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row item-center justify-between">
        <About text={description} />
        <Skills skills={skills} />
      </div>

    </Section>
  )
}

export default Intro;