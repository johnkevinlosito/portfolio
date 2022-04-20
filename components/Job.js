import React from 'react'
import moment from 'moment'

const Job = (props) => {
    const hasJobMoreThanOnePosition = props.positions.length > 1

    if (hasJobMoreThanOnePosition) {
        const dateStart = props.positions[props.positions.length - 1].dateStart
        const dateFinish = props.positions[0].dateFinish
        return (
            <div className='relative'>
                <div className='w-12 h-12 rounded-full shadow-md absolute top-0 left-0 transform -translate-x-1/2'>
                    <img src={props.company.logo} alt={props.company.name} className='w-12 h-12 rounded-full' />
                </div>
                <div className='mt-0 relative ml-auto pl-16'>
                    <div className='absolute inset-0 h-4 w-4 transform rotate-45 bg-gray-900 dark:bg-gray-500 translate-x-0 top-5 left-26 left-14' aria-hidden='true'>

                    </div>
                    <div className='rounded-md border-2 border-gray-900 dark:border-gray-500 bg-gray-900 dark:bg-gray-500'>
                        <div className='p-4'>
                            <h2 className='text-xl text-white font-bold '><a target='_blank' rel='noopener noreferrer' href={props.company.link}>{props.company.name}</a></h2>
                            <small className='text-xs uppercase text-white font-bold'>
                                {moment(new Date(dateStart)).format('MMMM YYYY')} - {dateFinish ? moment(new Date(dateFinish)).format('MMMM YYYY') : "Present"}
                            </small>
                        </div>
                        <div className='space-y-4 bg-white dark:bg-gray-900 rounded-b-md'>
                            <div className='p-4 '>
                                {props.positions.map((position) => (
                                    <div className='relative' key={position.title}>
                                        <span className='bg-gray-900 dark:bg-white block h-2 w-2 rounded-full absolute -left-[86px] top-2' />

                                        <p className='text-lg font-bold'>{position.title}</p>
                                        <small className='text-xs uppercase font-light'>
                                            {moment(new Date(position.dateStart)).format('MMMM YYYY')} - {position.dateFinish ? moment(new Date(position.dateFinish)).format('MMMM YYYY') : "Present"}
                                        </small>

                                        <p className='pt-4 text-base'>{position.description}</p>

                                        {position.stack && <p className='py-4 text-base'><b>Stack: </b>{position.stack}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div className='relative'>
            <div className=' bg-white dark:bg-gray-500 rounded-full shadow-md absolute top-0 left-0 transform -translate-x-1/2'>
                {props.company.logo ? <img src={props.company.logo} alt={props.company.name} className='w-12 h-12 rounded-full block' /> :
                    <div className='w-12 h-12 flex items-center justify-center'>?</div>}
            </div>
            <div className='mt-0 relative ml-auto pl-16'>
                <div className='absolute inset-0 h-4 w-4 transform rotate-45 bg-gray-900 dark:bg-gray-500 translate-x-0 top-5 left-26 left-14' aria-hidden='true'>

                </div>
                {props.positions.map((position) => (
                    <div className='rounded-md border-2 border-gray-900 dark:border-gray-500 bg-gray-900 dark:bg-gray-500' key={position.title}>
                        <div className='p-4'>
                            <h2 className='text-xl text-white font-bold '><a target='_blank' rel='noopener noreferrer' href={props.company.link}>{props.company.name}</a></h2>
                            <small className='text-xs uppercase text-white font-bold'>
                                {moment(new Date(position.dateStart)).format('MMMM YYYY')} - {position.dateFinish ? moment(new Date(position.dateFinish)).format('MMMM YYYY') : "Present"}
                            </small>
                        </div>
                        <div className='space-y-4 bg-white dark:bg-gray-900 rounded-b-md'>
                            <div className='p-4 '>

                                <div className='relative'>
                                    <p className='text-lg font-bold'>{position.title}</p>
                                    <p className='pt-4 text-base'>{position.description}</p>

                                    {position.stack && <p className='py-4 text-base'><b>Stack: </b>{position.stack}</p>}
                                </div>

                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Job