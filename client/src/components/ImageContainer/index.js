import React from 'react'

function ImageContainer(props) {
  return (
    

      <img
        src={props.thumbnail}
        className='img-responsive align-self-center my-3'
        alt='thumbnail'
        />
        
  )
}

export default ImageContainer
