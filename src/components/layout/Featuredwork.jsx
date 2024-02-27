import React from 'react'
import Project from './Project'

const Featuredwork = () => {
  return (
    <div className='my-10' id="Project">
        <h1 className='font-bold'>Featured Projects</h1>
        <div className='mt-6 flex flex-wrap gap-4'>
            <Project src={'/img6.jpg'} title="Food ordering App" tech="Next.js,Django, RestfulAPI "  />
            <Project src={'/todoapp.png'} title="Todo App" tech="Next.js,mongoDB "  />
            <Project src={'/main.jpg'} title="Travel and Tours" tech="React js, Django "  />
            
        </div>
    </div>
  )
}

export default Featuredwork