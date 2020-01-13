import React from 'react'

function Card(props) {
  return (
    <div className='card card-body border-light m-3 animated fadeIn'>
      {props.children}
    </div>
  )
}
export default Card
