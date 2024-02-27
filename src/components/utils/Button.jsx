import React from 'react'

const Button = ({type,title}) => {
  return (
        <button type={type} className='bg-blue-600 rounded-md text-center text-white font-bold text-sm px-4 py-2'>{title}</button>
  )
}

export default Button