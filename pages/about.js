import React from 'react'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'
import { social, title } from '../data/config'
import WorkExperience from '../components/WorkExperience'
import MainWrapper from '../components/MainWrapper'
import Certificates from '../components/Certificates'

const About = () => {

    return (
        <>
            <NextSeo
                canonical='https://johnkevinlosito.com/about'
                title={`About Me | ${title}`}
            />
            <SocialProfileJsonLd
                type='Person'
                name='John Kevin Losito'
                url='https://johnkevinlosito.com'
                sameAs={[
                    social.devto,
                    social.github,
                    social.twitter,
                    social.linkedin
                ]}
            />
            <MainWrapper>
                <WorkExperience />
                <Certificates />
            </MainWrapper>
        </>
    )
}

export default About