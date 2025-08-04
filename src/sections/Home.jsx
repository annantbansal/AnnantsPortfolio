import React from 'react'
import Typed from 'typed.js';
import profilepic from "../assets/profilepic.jpg"
import { useEffect,useRef } from 'react';
import { BiCircle } from "react-icons/bi";
import { GiZigzagHieroglyph } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import Button from '../components/Button';
const Home = () => {
     const el = useRef(null);
  const typed = useRef(null);
      useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-5 mb-11'>
      <div className='flex flex-col justify-center items-center md:items-start gap-2 w-full md:w-[50%] px-5 md:px-0'>
        <div className='text-white font-bold text-3xl mt-28 mb-6'>Hi! Annant Bansal</div>
        <div className='text-3xl md:text-5xl text-gray-400 mb-8'>I'm A <span ref={el} className="inline-block text-[#66fcff] min-w-[250px] md:min-w-[300px]"></span></div>
        <div className='text-gray-100 text-center md:text-left mb-6'>I'm a Engineering Student and here is my portfolio website.Here you will learn about my journey as an engineering graduate.</div>
        <div className='flex items-center justify-start'><Button linkto={"https://www.linkedin.com/in/annant-bansal-5608aa1b8/"} text={"Hire Me"}></Button></div>
      </div>
      <div className='w-full relative md:w-[50%] mt-6 flex justify-center items-center px-5 md:px-0'>
        <div className='relative p-7 overflow-visible perspective max-w-[450px] h-450px'>
        <BiCircle className='animate-float absolute text-yellow-400 w-20 h-10 z-10 -top-11 left-16'></BiCircle>
        <GiZigzagHieroglyph className='absolute text-[#66fcff] w-20 h-20 z-10 -rotate-90 top-[150px] -left-[49px] animate-lr'></GiZigzagHieroglyph>
        <FaStar className='absolute text-yellow-400 w-[33px] h-[33px] z-10 top-[440px] left-[350px] animate-star'></FaStar>
        <IoCubeOutline className='absolute text-red-600 w-[33px] h-[33px] z-10 left-[350px] -top-[20px] animate-flip flip-3d'></IoCubeOutline>
        <img src={profilepic} className='glow-bg animate-zoom h-[450px] rounded-lg object-cover'></img>
      </div>
      </div>
    </div>
  )
}

export default Home;
