import React from 'react'
import Link from "next/link"
import { useState } from 'react'
import ThemeSwitch from './ThemeSwitch'
import { HiMenu, HiX } from 'react-icons/hi'
import { headline } from '../data/config'

const Navigation = () => {
  const [active, setActive] = useState(false)

  const menuHandler = () => {
    setActive(!active)
  }
  return (
    <header className="sticky top-0 z-20 py-2 bg-white md:py-6 dark:bg-gray-900 shadow-md">
      <nav className="container px-4 mx-auto lg:max-w-4xl flex flex-col md:items-center md:justify-between md:flex-row-reverse gap-4">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <a
              className="font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 dark:text-white inline-flex md:hidden"
            >
              {headline}
            </a>
          </Link>
          <div className="flex justify-between items-center gap-4">
            <ThemeSwitch />
            <button className="inline-flex md:hidden cursor-pointer" onClick={menuHandler}>
              {active ? <HiX size={24} /> : <HiMenu size={24} />}

            </button>

          </div>
        </div>


        <div className={`${active ? 'flex' : 'hidden'
          } md:flex flex-col flex-grow md:flex-row gap-4 transition-all`}>
          <Link href="/">
            <a
              className="font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            >
              Home
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className="font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            >
              Portfolio
            </a>
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Navigation
