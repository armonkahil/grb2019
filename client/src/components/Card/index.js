import React from 'react'

function Card(props) {
  return (
    <div className='card shadow-lg border-light m-3 px-1 animated fadeInUpBig'>
      {props.children}
    </div>
  )
}
export default Card
