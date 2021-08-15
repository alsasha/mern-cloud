import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import cloud from '../../assets/img/cloud.png'

const Navbar = () => {
  return (
    <div className="navbar flex justify-between align-center">
      <NavLink to='/'>
        <div className="navbar-logo flex justify-between align-center">
          <img src={cloud} alt="logo" className="navbar-image" />
          <p className="navbar-title">Cloud disk</p>
        </div>
      </NavLink>

      <div className="flex justify-between align-center">
        <NavLink to='/registration'>
          <button className="btn mr10">Sign in</button>
        </NavLink>
        <NavLink to='/login'>
          <button className="btn">Login</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
