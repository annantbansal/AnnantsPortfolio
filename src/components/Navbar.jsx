import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import a from '../assets/a.png';
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggle = () => setMenu(!menu);

  return (
    <div className="relative">
      <nav className='relative flex w-full h-20 top-0 left-0 justify-between items-center px-3 py-3'>
        <h1 className='text-white text-2xl flex items-center gap-0 font-bold'><span><img src={a} className='w-11'></img></span>nnant Bansal</h1>
        <ul className='hidden md:flex gap-12 justify-evenly items-center text-white'>
          <li className='font-semibold'>
            <a href='#project' className='border-b-2 border-transparent hover:border-[#66fcff] transition duration-300'>Projects</a>
          </li>
          <li className='font-semibold'>
            <a href='#skills' className='border-b-2 border-transparent hover:border-[#66fcff] transition duration-300'>Skills</a>
          </li>
          <li className='font-semibold'>
            <a href='#contact' className='border-b-2 border-transparent hover:border-[#66fcff] transition duration-300'>Contact Me</a>
          </li>
        </ul>
        <button onClick={toggle} className='block z-50 md:hidden'>
          <GiHamburgerMenu className='text-white h-6 w-6' />
        </button>
      </nav>

      {menu && (
        <ul className="absolute top-20 right-4 w-[180px] bg-[#0a152b] border border-[] shadow-lg rounded-xl py-4 px-2 flex flex-col gap-4 items-center text-white md:hidden z-40">
          <li><a href="#project" className='font-semibold hover:text-[#66fcff] transition duration-300'>Projects</a></li>
          <li><a href="#skills" className='font-semibold hover:text-[#66fcff] transition duration-300'>Skills</a></li>
          <li><a href="#contact" className='font-semibold hover:text-[#66fcff] transition duration-300'>Contact Me</a></li>
        </ul>
      )}
    </div>
  )
}

export default Navbar;
