import React from 'react'

const Button = ({linkto,text}) => {
  return (
    <div className='cursor-pointer inline-block text-center text-[13px] px-6 py-3 rounded-md font-bold bg-yellow-300 hover:scale-95 transition-all duration-200'><a className='inline-block' href={linkto}>{text}</a></div>
  )
}

export default Button;
