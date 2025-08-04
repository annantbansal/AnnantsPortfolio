import React from 'react'
import Navbar from './components/Navbar';
import Home from './sections/Home';
import CodeBlock from './components/CodeBlock';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
const App = () => {
  return (
    <div className='w-full md:w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Home></Home>
      <CodeBlock codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linl rel="stylesheet" href="styles.css">\n/head>\nbody>\nh1><a href='/">Header</a>\n/h1>\nnav><a href='/one'>One</a><a href="/two">Two<\n/a><a href="/three">Three</a>\n</nav>`} codeclr={"text-[#00FFAD]"}></CodeBlock>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  )
}

export default App;
