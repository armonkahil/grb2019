import React from 'react'
import './style.css'

function ImageContainer(props) {
  return (
    <div className='col-4 align-self-center'>
      <img
        src={props.thumbnail}
        className='img-fluid img-responsive'
        alt='thumbnail'
      ></img>
    </div>
  )
}

export default ImageContainer
