import React from 'react'

function Column(props) {
  return (
    <div className='text-center justify-content-center align-self-center d-flex justify-content-center'>
      {props.children}
    </div>
  )
}

export default Column
