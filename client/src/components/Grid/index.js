/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import React from 'react'

export const Container = ({ styling, children }) => {
  return (
    <>
      {styling ? (
        <div className={`container ${styling}`}>{children}</div>
      ) : (
        <div className='container'>{children}</div>
      )}
    </>
  )
}

export const Column = ({ size, styling, children }) => {
  let size1

  // if size prop passed to this component, map col-size to class Name
  size
    ? (size1 = size
        .split(' ')
        .map(size => `col-${size}`)
        .join(' '))
    : // if not, just set the class to col
      (size = 'col')
  let styling1
  styling ? (styling1 = styling) : (styling = '')
  return <div className={`${size} ${styling}`}>{children}</div>
}

export const Row = ({ styling, children }) => {
  return (
    <>
      {styling ? (
        <div className={`row ${styling}`}>{children}</div>
      ) : (
        <div className='row'>{children}</div>
      )}
    </>
  )
}
