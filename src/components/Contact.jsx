import React from 'react'
import mail from '../assets/gm.png';
import linkedin from '../assets/lin.png';
import wp from '../assets/wp.png';
import insta from '../assets/insta.png';
import x from '../assets/x.png';
import fb from '../assets/fb.png';
const Contact = () => {
  return (
    <div  id='contact'  className='p-10'>
      <div className='my-0 mx-auto'>
        <h1 className='text-[#66fcff] pt-8 text-6xl md:text-8xl'>Contact Me</h1>
        <h3 className='text-3xl md:text-4xl capitalize text-[#e84949] my-2'>Questions, Thoughts, or just want to say hello?</h3>
        <div className='flex flex-row justify-center items-center my-6 gap-8'>
           <a href="mailto:annantbansal1612@gmail.com">
            <img src={mail} className='w-16 h-16 hover:scale-125 trasition-all duration-500'></img>
           </a>
           <a href="https://www.linkedin.com/in/annant-bansal-5608aa1b8/">
            <img src={linkedin} className='w-16 h-16 hover:scale-125 trasition-all duration-500'></img>
           </a>
           {/* <a href="mailto:annantbansal1612@gmail.com">
            <img src={x} className='w-16 h-16 hover:scale-125 trasition-all duration-500'></img>
           </a> */}
           <a href="https://api.whatsapp.com/send/?phone=%2B91766844204&text&type=phone_number&app_absent=0">
            <img src={wp} className='w-16 h-16 hover:scale-125 trasition-all duration-500'></img>
           </a>
           <a href="https://www.instagram.com/annatbansal/">
            <img src={insta} className='w-16 h-16 hover:scale-125 trasition-all duration-500'></img>
           </a>
           <a href="https://www.facebook.com/annant.bansal.5">
            <img src={fb} className='w-16 h-16 hover:scale-125 trasition-all duration-500'></img>
           </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
