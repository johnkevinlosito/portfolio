import React from 'react'
import { GoLinkExternal, GoMarkGithub } from 'react-icons/go';

const ProjectLink = ({ link, type }) => {

    switch (type) {
        case 'url':
            return (
                <a href={link}
                    target='_blank'
                    rel='noreferrer'
                    className='flex gap-1 items-center bg-white text-gray-800 font-bold py-1 px-2 rounded-md'>
                    Visit Website
                    <GoLinkExternal />
                </a>
            )

        case 'repo':
            return (
                <a href={link}
                    target='_blank'
                    rel='noreferrer'
                    className='flex gap-1 items-center bg-white text-gray-800 font-bold py-1 px-2 rounded-md'>
                    View Source
                    <GoMarkGithub />
                </a>
            )
        default:
            break;
    }



}

export default ProjectLink