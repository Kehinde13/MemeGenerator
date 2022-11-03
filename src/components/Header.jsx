import React from 'react'
import logo from '../images/logo.jpg'

function Header() {
  return (
    <div className='Header'>
       <div>
          <img src={logo} alt="logo" />
          <h2>Meme Generator</h2>
       </div>
    </div>
  )
}

export default Header