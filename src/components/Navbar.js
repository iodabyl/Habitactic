import React from 'react';
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
      <nav className='nav'>
          <div className="nav-center">
              <img src={logo} alt="logo" />
              <ul className='nav-links'>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/coaching'>Coaching</Link></li>
                  <li><Link to='/'>Contact</Link></li>
              </ul>
          </div>
      </nav>
  )
}
