import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'
import ThemeSwitch from './ThemeSwitch'
import { HiMenu, HiX } from 'react-icons/hi'
import { authorName } from '../data/config'

const Navigation = () => {
  const [active, setActive] = useState(false)
  const router = useRouter();
  const menuHandler = () => {
    setActive(!active)
  }
  return (
    <header className='sticky top-0 z-30 backdrop-blur-lg backdrop-saturate-150 bg-opacity-75 shadow-lg mb-4'>
      <nav className='container px-4 mx-auto lg:max-w-5xl flex flex-col md:items-center md:justify-between md:flex-row-reverse md:gap-4'>
        <div className='flex flex-row items-center justify-between'>
          <Link href='/'>
            <a
              className='font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 dark:text-white inline-flex md:hidden py-4'
            >
              {authorName}
            </a>
          </Link>
          <div className='flex justify-between items-center gap-4'>
            <ThemeSwitch />
            <button className='inline-flex md:hidden cursor-pointer' onClick={menuHandler}>
              {active ? <HiX size={24} /> : <HiMenu size={24} />}

            </button>

          </div>
        </div>


        <div className={`${active ? 'flex' : 'hidden'
          } md:flex flex-col flex-grow md:flex-row gap-4 transition-all`}>
          <Link href='/'>
            <a
              className={`font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white py-2 md:py-6  ${router.pathname == '/' ? 'md:border-b-2 md:border-gray-900 dark:border-white' : ''}`}
              onClick={menuHandler}
            >
              Home
            </a>
          </Link>
          <Link href='/posts'>
            <a
              className={`font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white py-2 md:py-6  ${router.pathname == '/posts' ? 'md:border-b-2 md:border-gray-900 dark:border-white' : ''}`}
              onClick={menuHandler}
            >
              Posts
            </a>
          </Link>
          <Link href='/about'>
            <a
              className={`font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white py-2 md:py-6  ${router.pathname == '/about' ? 'md:border-b-2 md:border-gray-900 dark:border-white' : ''}`}
              onClick={menuHandler}
            >
              About
            </a>
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Navigation
