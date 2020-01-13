import React from 'react'

function ImageContainer(props) {
  return (
    <div className='col-4 align-self-center shadow-lg'>
      <img
        src={props.thumbnail}
        className='img-fluid img-responsive card-img'
        alt='thumbnail'
      ></img>
    </div>
  )
}

export default ImageContainer
