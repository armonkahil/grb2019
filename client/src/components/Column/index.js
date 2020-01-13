import React from 'react'

function Col(props) {
  return (
    <div className='col-lg-10 col-xl-11 d-flex align-content-center text-center mx-auto container-fluid justify-content-center'>
      {props.children}
    </div>
  )
}

export default Col
