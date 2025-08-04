import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Button from './Button';
const CodeBlock = ({codeclr,codeblock}) => {
  return (
    <div className='flex flex-col gap-10 md:flex-row justify-between mb-11'>
      <div className='w-[100%] md:w-[50%] px-5 m-7 md:m-0 md:px-0 flex flex-col items-center gap-3 rounded-lg' style={{
  background: 'radial-gradient(ellipse 80% 60% at top left, rgba(0,255,173,0.3), transparent 70%)',
}}>
        <h1 className='text-3xl text-[#66fcff] font-bold mb-5'>&lt;AboutAnnant/&gt;</h1>
        <p className='text-lg text-gray-300 leading-relaxed px-4 py-2'>Hi, I’m <span className="font-semibold text-[#00FFAD]">Annant Bansal</span>, a 3rd-year B.Tech student specializing in Information Technology.
      I’m passionate about exploring the world of <span className="text-[#00FFAD] font-medium">full stack development</span> and solving real-world problems through code.
      With a strong interest in <span className="text-[#00FFAD] font-medium">data structures and algorithms</span>, I enjoy optimizing logic and building responsive, user-friendly interfaces.
      Alongside tech, I also strive to perform well academically and grow as a consistent learner.</p>
      <Button linkto={"https://drive.google.com/file/d/1VGRhgrDtjjLcYh8C-Qh2CerrN9KKNQAJ/view?usp=sharing"} text={'Check My Resume'}></Button>
      </div>
      <div className='min-w-[50%] px-5 md:px-0 py-3 m-7 md:m-0 flex flex-row text-[10px] text-xl rounded-lg h-[100%]' style={{
  background: 'radial-gradient(ellipse 70% 50% at center, rgba(255, 255, 153, 0.2), transparent 90%)',
}}>
    <div className="text-center flex flex-col w-[10%] text-gray-500 font-bold ">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>
            <div className={`w-[90%] flex flex-col gap-2 text-lg font-bold font-mono ${codeclr} pr-2`}>
            <TypeAnimation
            sequence={[codeblock,5000,""]} repeat={Infinity} cursor={true} 
            style={{
                whiteSpace:"pre-line",
                display:"block"
            }
            } omitDeletionAnimation={true}></TypeAnimation>
            </div>
      </div>
    </div>
  )
}

export default CodeBlock;
