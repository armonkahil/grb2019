import React from 'react'

function Card(props) {
  return (
    <div className='card container col bg-gradient-light m-5 p-3 animated fadeInUpBig'>
      {props.children}
    </div>
  )
}
export default Card
