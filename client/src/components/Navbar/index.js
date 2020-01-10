import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar() {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  const classOne = collapsed
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show animated fadeIn'
  const classTwo = collapsed
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'

  return (
    <>
      <nav className='navbar navbar-expand-lg fixed-top navbar-light text-dark'>
        <button
          onClick={toggleNavbar}
          className={`${classTwo}`}
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className={`${classOne}`} id='navbarResponsive'>
          <h3>Google Books</h3>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Search
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/saved'>
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
