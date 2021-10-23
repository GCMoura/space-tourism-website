import React from "react";
import Link from "../Link";

import Logo from '../../assets/shared/logo.svg'
import Hamburguer from '../../assets/shared/icon-hamburger.svg'
import Close from '../../assets/shared/icon-close.svg'

import './style.css'

function Header(){
  
  function toggleMenu() {
    var closeHamburgerButton = document.querySelector('.close-image')
    var hamburgerButton = document.querySelector('.hamburger-image')
    var navBar = document.querySelector('.nav-bar')    

    hamburgerButton.classList.toggle('hamburger-image-close')
    closeHamburgerButton.classList.toggle('close-image-show')
    navBar.classList.toggle('nav-bar-transtition')

  }

  return(
    <header className="header-content">
      <div className="header-left-content">
        <img src={Logo} alt="Logo"/>
        <div className="header-line"></div>
      </div>
      <div className="header-right-content">
        <div className="hamburger-menu">
          <img className="hamburger-image " src={Hamburguer} onClick={toggleMenu} alt=""/>
          <img className="close-image " src={Close} onClick={toggleMenu} alt=""/> 
        </div>
        <div className="nav-bar ">
          <Link href='#' link='HOME'></Link>
          <Link href='/destination' link='DESTINATION'></Link>
          <Link href='#' link='CREW'></Link>
          <Link href='#' link='TECHNOLOGY'></Link>
        </div>
      </div>
    </header>
  )
}

export default Header