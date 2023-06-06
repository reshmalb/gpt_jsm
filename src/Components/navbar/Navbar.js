import React from 'react'
import './Navbar.css'
import logo from '../../asset/logo.svg'

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'> 
          <img src={logo} alt="logo"></img>
        </div>
        <div className='gpt3__navbar-menu_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#whatisGPT">What is GPT?</a></p>
          <p><a href="#possibility">Possibilities</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">Blog</a></p>

        </div>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign in</p>
          <button type="button"> SignUp

          </button>

        

      </div>
    </div>
  )
}

export default Navbar
