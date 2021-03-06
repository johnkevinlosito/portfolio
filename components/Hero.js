import React from 'react'

const Hero = ({ title, content }) => {
  return (
    <section className="w-full h-70vh bg-hero-img bg-bottom-center bg-no-repeat bg-cover bg-fixed grid place-items-center text-center">
      {content && content}
      {title && <h1 className="text-6xl font-bold text-white text-shadow-sm">{title}</h1>}
    </section>
  )
}

export default Hero
