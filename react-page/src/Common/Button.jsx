import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`px-4 py-2 rounded-full transition-all duration-300 ease-linear cursor-pointer ${className}`}>
        {children}
    </button>
  )
}

export default Button
