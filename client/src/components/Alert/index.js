import React from 'react'

function Alert({ alertMessage, bookSavedAlert }) {
  return bookSavedAlert ? (
    <div className='alert alert-warning alert-dismissible fade show' role='alert'>
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  ) : (
    <div className='alert alert-warning alert-dismissible fade show' role='alert'>
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  )
}

export default Alert
