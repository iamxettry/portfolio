import Featuredwork from '@/components/layout/Featuredwork'
import GetInTouch from '@/components/layout/GetInTouch'
import Hero from '@/components/layout/Hero'
import Skills from '@/components/layout/Skills'
import React from 'react'

const Home = () => {
  return (
    <section className='max-w-[90%] mx-auto'>
      <Hero/>
      <Featuredwork/>
      <Skills/>
      <GetInTouch/>
    </section>
  )
}

export default Home