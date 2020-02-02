import React from 'react'

function Alert({ alertMessage }) {
  return (
    <div className='alert alert-success' role='alert'>
      {alertMessage}
    </div>
  )
}

export default Alert
