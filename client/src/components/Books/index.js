/* eslint-disable react/destructuring-assignment */
import React from 'react'

const bookTitle = props => {
  return (
    <h3 className='display-6 card-title mx-auto text-center display-block'>
      {props.bookTitle}
    </h3>
  )
}
export default bookTitle
