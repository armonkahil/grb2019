/* eslint-disable react/destructuring-assignment */
import React from 'react'
import UnSavedButtons from '../UnSavedButtons'
import SavedButtons from '../SavedButtons'

const ButtonContainer = props => {
  return (
    <div className='btn btn-sm-group'>
      {!props.saved ? (
        <>
          <UnSavedButtons { ...props} />
        </>
      ) : (
          <>
            <SavedButtons { ...props} />
        </>
      )}
    </div>
  )
}

export default ButtonContainer
