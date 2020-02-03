import React from 'react'

function Card(props) {
  return (
    <div className='card container bg-gradient-light my-5 animated fadeInUpBig'>
      {props.children}
    </div>
  )
}
export default Card
