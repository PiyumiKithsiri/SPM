import React from 'react'
import './HeaderContent.css'
import MenuLink from '../MenuLink/MenuLink'

function HeaderContent() {
  return (
    <div id='navcontent'>
      <img src='logo512.png' alt="reactlogo"></img>
    <div>
      <MenuLink linkname="Home" url="#home"/>
      <MenuLink linkname="About" url="#about"/>
      <MenuLink linkname="Contact" url="#contact"/>
      <MenuLink linkname="Login" url="#login"/>
    </div>
    </div>
    
    
  )
}

export default HeaderContent
