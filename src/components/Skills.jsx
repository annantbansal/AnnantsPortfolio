import React from 'react'
import blob from '../assets/blob vector.png';
import html from '../assets/HTML.png';
import css from '../assets/CSS.png';
import react from '../assets/React.png';
import tailwind from '../assets/Tailwind.png';
import mongo from '../assets/MongoDB.svg';
import node from '../assets/NodeJs.svg';
import express from '../assets/Express.png';
import vercel from '../assets/Vercel.svg';
import js from '../assets/Javascript.svg';
import boot from '../assets/Bootstrap.svg';
import git from '../assets/Git.svg';
import github from '../assets/Github.svg';
import cplus from '../assets/c++.svg';
import c from '../assets/c.svg';
import python from '../assets/python.svg';
import java from '../assets/java.png';
import redux from '../assets/Redux.svg';

const Skills = () => {
  return (
    <div className='mt-24 mb-16' id='skills'>
        <h1 className='text-center text-5xl font-bold mb-8 text-[#8af378] drop-shadow-[0_0_6px_#39FF14] animate-glitch'>Skills</h1>
    <div className='my-16 mx-auto relative flex flex-col md:flex-row p-5 gap-16 md:gap-11'>
      <div className=' w-full md:w-[50%] flex flex-col items-center md:items-start'>
        <h2 className='font-semibold text-5xl text-[#e84949]'><span className='text-8xl'>M</span>e and<br></br>MyTech Stack</h2>
        <div className='w-[85%] mt-5 text-gray-400'>
            <p>Hi Everyone My name is Annant Bansal,currently i am a third year student pursuing Bachelor Of Technology in Information Technology from KIET Group of Institutions.</p>
                <br></br>
                <p>I am a Web Developer currently comfortable with HTML, CSS, BootStrap, Tailwind, JavaScript, React Redux, Node.js, Express, MongoDB and working on other frameworks as well.</p>
                <br></br>
                <p>I also do Problem-Solving in and familar with languages such as C, C++, Python, JavaScript and Java.</p>
        </div>
      </div>
      <div className='w-full md:w-[50%] flex flex-wrap realtive gap-8 relative justify-center items-center p-4'>
        <img src={blob} className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 -z-5 animate-blobanimate opacity-20'></img>
        <img src={html} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={css} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={js} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={boot} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={tailwind} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={react} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={redux} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={mongo} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={node} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={express} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={vercel} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={git} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={github} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        {/* <img src={c} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img> */}
        <img src={cplus} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={java} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
        <img src={python} className='w-24 hover:scale-125 transition-all duration-500 z-10'></img>
      </div>
    </div>
    </div>
  )
}

export default Skills;
