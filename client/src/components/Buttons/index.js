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
        className={`btn btn-primary mx-2 ${props['data-value']}`}
        {...props}
      >
        Save
      </button>
    </>
  )
}

export const ViewBtn = props => {
  return (
    <>
      <a
        className='btn btn-success active'
        href={props.link}
        target={'_blank'}
        rel='noopener noreferrer'
        onClick={props.onClick}
        style={{ backgroundColor: '#92cd28' }}
        {...props}
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
