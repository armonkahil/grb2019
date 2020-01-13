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
      <nav className='navbar navbar-expand-lg fixed-top text-dark m-0'>
        <button
          onClick={toggleNavbar}
          className={`${classTwo} bg-light`}
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className={`${classOne} pl-2 fixed-top`} id='navbarResponsive'>
          <h1 className='banner'>(React) Google Books</h1>
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
          <div className='nav-item'>
            <a className='' href='https://www.google.com'>
              Powered by
              <img
                src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                className=' mx-2 mb-0 h1 img-fluid img-responsive'
                width='90'
                height='50'
                alt='Google Logo'
              ></img>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
