import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/NavBarStyles.css'
import '../styles/General.css'

const NavBar = () => {

  const activeTabStyles = ({isActive})=> {return isActive ? 'activeTab' : 'nav-bar-tab'};

  return (
    <div className='nav-bar-container'>
      <h2 style={{color: 'white', marginLeft: '10px', fontFamily: 'Times New Roman'}}>Company Name</h2>
      <NavLink className={activeTabStyles} style={{marginRight:'30px'}} to='/'>Transaction Details</NavLink>
      <NavLink className={activeTabStyles} style={{marginRight:'30px'}} to='/about'>About</NavLink>
    </div>
  )
}

export default NavBar