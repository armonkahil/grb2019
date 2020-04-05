import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='card container justify-content-center align-items-center text-center bg-gradient-light my-5 animated fadeInUpBig'>
      {children}
    </div>
  )
}
export default Card
