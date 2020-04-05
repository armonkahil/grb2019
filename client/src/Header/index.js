import React from 'react'
import { Column, Row } from '../components/Grid'
import Jumbotron from '../components/Jumbotron'

const Header = ({children, title, lead }) =>
{
  return (
    <div className='container'>
      <Row styling=' row align-self-center' />
      <Jumbotron
        title='(React) Google Books Search'
        lead='Saved Books of Interest'
      />
      <Row />
      <Column />
      {children}
    </div>
  )
}

export default Header