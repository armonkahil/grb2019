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
    ? 'navbar-toggler rounded-lg text-light navbar-toggler-right collapsed'
    : 'navbar-toggler rounded-lg text-light navbar-toggler-right'

  return (
    <div className='container'>
      <nav
        className='container rounded-lg navbar navbar-expand-lg navbar-dark my-3'
        style={{ backgroundColor: '#FFA44E' }}
      >
        <h4 className='mx-2 d-block d-md-none text-light'>
          (React) Google Books
        </h4>
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
          <span className='navbar-toggler-icon bg-inverse' />
        </button>
        <div
          className={`${classOne} pl-2 text-light rounded-lg `}
          id='navbarResponsive'
        >
          <h4 className='banner d-none d-md-block'>
            (React) Google Books
          </h4>
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
          <div className='nav-item justify-content-end'>
            <a className='float-right' href='https://www.google.com'>
              Powered by
              <img
                src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                className=' mx-2 mb-0 h1 img-fluid img-responsive'
                width='90'
                height='50'
                alt='Google Logo'
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
