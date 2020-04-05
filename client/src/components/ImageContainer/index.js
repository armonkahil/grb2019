import React from 'react'

const ImageContainer = ({ thumbnail }) => {
  return (
    <img
      src={thumbnail}
      className='img-responsive align-self-center mx-auto my-3'
      alt='thumbnail'
    />
  )
}

export default ImageContainer
