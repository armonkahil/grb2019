/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

export const SearchBtn = ({ handleSubmit }) => {
  return (
    <>
      <div className='d-flex justify-content-end'>
        <button
          type='button'
          className='btn btn-success my-2'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export const SaveBtn = props => {
  return (
    <>
      <button
        type='button'
        className='btn btn-primary mx-2'
        {...props}
      >
        Save
      </button>
    </>
  )
}

export const ViewBtn = ({ link, onClick, ...rest }) => {
  return (
    <>
      <a
        className='btn btn-success active'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        onClick={onClick}
        style={{ backgroundColor: '#92cd28' }}
        {...rest}
      >
        View
      </a>
    </>
  )
}

export const DeleteBtn = props => {
  return (
    <span
      className='btn btn-info mx-2 delete-btn float-right'
      {...props}
      role='button'
      tabIndex='0'
      style={{ backgroundColor: '#F78914' }}
    >
      ✗
    </span>
  )
}
