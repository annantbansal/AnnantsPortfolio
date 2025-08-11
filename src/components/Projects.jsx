import React from 'react'
import { FaGithub } from "react-icons/fa";
import p1 from '../assets/p1.png'
import react from '../assets/React.png';
import tailwind from '../assets/Tailwind.png';
import mongo from '../assets/MongoDB.svg';
import node from '../assets/NodeJs.svg';
import express from '../assets/Express.png';
import vercel from '../assets/Vercel.svg';
import Button from './Button';
import html from '../assets/HTML.png';
import css from '../assets/CSS.png';
import js from '../assets/Javascript.svg';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
const Projects = () => {
  return (
    <div className='m-4' id='project'>
      <h1 className='text-center text-5xl font-bold mb-8 text-[#8af378] drop-shadow-[0_0_6px_#39FF14] animate-glitch'>Projects</h1>
      <div className='flex flex-col py-3 my-0 px-5 md:px-0 mx-auto gap-14'>


        <div className="project-card group md:right-[70px] mt-0 mx-auto w-[90%] h-[350px] md:w-full max-w-[900px] md:h-[550px] relative glow-bg bg-cover rounded-lg" style={{ backgroundImage: `url(${p1})` }}>
            <div className='absolute right-[10px] -top-[15px] text-9xl text-white z-10 opacity-0 font-semibold group-hover:opacity-100'>01</div>
            <div className='project-content absolute  top-[50%] left-[40%] md:top-[100px] md:left-[80px] transform -translate-x-1/2 -translate-y-1/2 
  md:translate-x-0 md:translate-y-0 flex-col text-white p-2 gap-2 z-20 group-hover:scale-110 w-[60%] transition-all diration-700 hidden group-hover:flex'>
                <div className='w-[60%] flex flex-wrap gap-[7%]'>
                  <img src={react} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]'></img>
                    <img src={tailwind} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={mongo} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={node} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={express} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={vercel} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                </div>
                <h2 className='text-xl md:text-5xl font-bold text-[#66fcff]' >Forever</h2>
                <div className='text-sm md:text-lg  italic w-[70%]' >It is a full stack working, deployed E-commerce website.</div>
                <div className='flex items-center gap-2'>
                    <Button linkto={"https://forever-frontend-final.vercel.app/"} text={'Checkout'}></Button>
                    <a className='cursor-pointer' href='https://github.com/annantbansal'><FaGithub className='text-white hover:text-[#66fcff] w-12 h-12'></FaGithub></a>
                </div>
            </div>
        </div>


        <div className="project-card group md:left-[70px] mt-0 mx-auto w-[90%] h-[350px] md:w-full max-w-[900px] md:h-[550px] relative glow-bg bg-cover rounded-lg" style={{ backgroundImage: `url(${p5})` }}>
            <div className='absolute left-[10px] -top-[15px] text-9xl text-white z-10 opacity-0 font-semibold group-hover:opacity-100'>02</div>
            <div className='project-content absolute top-[50%] left-[70%] md:top-[90px] md:left-[500px] transform -translate-x-1/2 -translate-y-1/2  md:translate-x-0 md:translate-y-0 flex-col text-white p-2 gap-2 z-20 group-hover:scale-110 transition-all diration-700 hidden group-hover:flex'>
                <div className='w-[60%] flex flex-wrap gap-[7%]'>
                    <img src={react} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]'></img>
                    <img src={tailwind} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={mongo} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={node} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={express} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={vercel} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    {/* <img src={vercel} className='w-[40px] mb-[4px]' alt="" /> */}
                </div>
                <h2 className='text-xl md:text-5xl font-bold text-[#66fcff]' >Talk Time</h2>
                <div className='text-sm md:text-lg italic w-[70%]' >It is a real-time messaging application made using socket.io</div>
                <div className='flex items-center gap-2'>
                    <Button linkto={"https://talktime-xi.vercel.app/login"} text={'Checkout'}></Button>
                    <a className='cursor-pointer' href='https://github.com/annantbansal'><FaGithub className='text-white hover:text-[#66fcff] w-12 h-12'></FaGithub></a>
                </div>
            </div>
        </div>


        <div className="project-card group md:right-[70px] mt-0 mx-auto w-[90%] h-[350px] md:w-full max-w-[900px] md:h-[550px] relative glow-bg bg-cover rounded-lg" style={{ backgroundImage: `url(${p3})` }}>
            <div className='absolute right-[10px] -top-[15px] text-9xl text-white z-10 opacity-0 font-semibold group-hover:opacity-100'>03</div>
            <div className='project-content absolute top-[50%] left-[40%] md:top-[100px] md:left-[80px] transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 flex-col text-white p-2 gap-2 z-20 group-hover:scale-110 transition-all diration-700 hidden group-hover:flex'>
                <div className='w-[60%] flex flex-wrap gap-[7%]'>
                  <img src={html} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]'></img>
                    <img src={css} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={js} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    {/* <img src={node} className='w-[40px] mb-[4px]' alt="" />
                    <img src={express} className='w-[40px] mb-[4px]' alt="" /> */}
                    <img src={vercel} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                </div>
                <h2 className='text-xl md:text-5xl font-bold text-[#66fcff]' >Weather App</h2>
                <div className='text-sm md:text-lg italic w-[70%]' >It is weather app created using html,css and basic javascript.It is using OpenWeather API.</div>
                <div className='flex items-center gap-2'>
                    <Button linkto={"https://celadon-monstera-3824eb.netlify.app/"} text={'Checkout'}></Button>
                    <a className='cursor-pointer' href='https://github.com/annantbansal'><FaGithub className='text-white hover:text-[#66fcff] w-12 h-12'></FaGithub></a>
                </div>
            </div>
        </div>


        <div className="project-card group md:left-[70px] mt-0 mx-auto w-[90%] h-[350px] md:w-full max-w-[900px] md:h-[550px] relative glow-bg bg-cover rounded-lg" style={{ backgroundImage: `url(${p2})` }}>
            <div className='absolute left-[10px] -top-[15px] text-9xl text-white z-10 opacity-0 font-semibold group-hover:opacity-100'>04</div>
            <div className='project-content absolute top-[50%] left-[70%] md:top-[90px] md:left-[500px] transform -translate-x-1/2 -translate-y-1/2  md:translate-x-0 md:translate-y-0 flex-col text-white p-2 gap-2 z-20 group-hover:scale-110 transition-all diration-700 hidden group-hover:flex'>
                <div className='w-[60%] flex flex-wrap gap-[7%]'>
                    <img src={html} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]'></img>
                    <img src={tailwind} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={css} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={js} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    {/* <img src={vercel} className='w-[40px] mb-[4px]' alt="" /> */}
                </div>
                <h2 className='text-xl md:text-5xl font-bold text-[#66fcff]' >Tic Tac Toe</h2>
                <div className='text-sm md:text-lg italic w-[70%]' >It is a Tic Tac Toe game redeigned in theme of Money Heist and is made for 2 players. </div>
                <div className='flex items-center gap-2'>
                    <Button linkto={"https://sunny-croissant-85e2e6.netlify.app/"} text={'Checkout'}></Button>
                    <a className='cursor-pointer' href='https://github.com/annantbansal'><FaGithub className='text-white hover:text-[#66fcff] w-12 h-12'></FaGithub></a>
                </div>
            </div>
        </div>

        
        

<div className="project-card group md:right-[70px] mt-0 mx-auto w-[90%] h-[350px] md:w-full max-w-[900px] md:h-[550px] relative glow-bg bg-cover rounded-lg" style={{ backgroundImage: `url(${p4})` }}>
            <div className='absolute right-[10px] -top-[15px] text-9xl text-white z-10 opacity-0 font-semibold group-hover:opacity-100'>05</div>
            <div className='project-content absolute top-[50%] left-[40%] md:top-[100px] md:left-[80px] transform -translate-x-1/2 -translate-y-1/2  md:translate-x-0 md:translate-y-0 flex-col text-white p-2 gap-2 z-20 group-hover:scale-110 transition-all diration-700 hidden group-hover:flex'>
                <div className='w-[60%] flex flex-wrap gap-[7%]'>
                    <img src={html} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]'></img>
                    {/* <img src={tailwind} className='w-[40px] mb-[4px]' alt="" /> */}
                    <img src={css} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={js} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                    <img src={vercel} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-[4px]' alt="" />
                </div>
                <h2 className='text-xl md:text-5xl font-bold text-[#66fcff]' >Yojana Path</h2>
                <div className='text-sm md:text-lg italic w-[70%]' >It is a website to simplify the government schemes for common people.</div>
                <div className='flex items-center gap-2'>
                    <Button linkto={"https://67aa28395fca59ffe8e1a0c1--roaring-beignet-bdaa4d.netlify.app/"} text={'Checkout'}></Button>
                    <a className='cursor-pointer' href='https://github.com/annantbansal'><FaGithub className='text-white hover:text-[#66fcff] w-12 h-12'></FaGithub></a>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Projects;
