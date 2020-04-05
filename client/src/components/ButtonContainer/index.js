/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { SaveBtn, ViewBtn, DeleteBtn } from '../Buttons'

const ButtonContainer = props => {
  return (
    <div className='btn btn-sm-group'>
      {!props.saved ? (
        <>
          <SaveBtn key={props.id} onClick={props.handleSave} />
          <ViewBtn link={props.link} onClick={props.onClick} />
        </>
      ) : (
        <>
          <ViewBtn link={props.link} onClick={props.onClick} />
          <DeleteBtn id={props.id} onClick={props.delete} />
        </>
      )}
    </div>
  )
}

export default ButtonContainer
