import React from "react"
import Image from "next/image"
import profile from "../public/images/avatar_memoji.jpg"
import About from "./About"
import Section from "./Section"

const Intro = () => {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 items-center">
        <About />
        <div className="p-2 bg-white dark:bg-gray-900 rounded-full justify-self-center order-first lg:order-last">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
      </div>
    </Section>
  );
}

export default Intro;