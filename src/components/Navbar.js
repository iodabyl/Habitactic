import React from 'react';
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
      <nav className='nav'>
          <div className="nav-center">
            <div className="logo">
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
              <ul className='nav-links'>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/coaching'>Coaching</Link></li>
                  <li><Link className='callToAction' to='/contact'>Start Today</Link></li>
              </ul>
          </div>
      </nav>
  )
}
