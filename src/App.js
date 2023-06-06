import React from 'react'
import { Article,Navbar,Feature,Brand,CTA } from './Components/indexcomponent'
import { Blog,Features,Footer,Header,Possibility,WhatGpt3 } from './container/indexcontainer'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
        
      </div>
       <div>
        <Brand/>
        <WhatGpt3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>

       </div>
      
    </div>
  )
}

export default App
