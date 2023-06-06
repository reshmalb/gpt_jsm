import React from 'react'
import { Article,Navbar,Feature,Brand,CTA } from './Components/indexcomponent'
import { Blog,Features,Footer,Header,Possibility,WhatGpt3 } from './container/indexcontainer'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
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
