import React from 'react'
import { ViewBtn, DeleteBtn } from '../Buttons'

const SavedButtons = props => {
  
  return (
        <>
          <ViewBtn link={props.link} onClick={props.onClick} />
          <DeleteBtn id={props.id} onClick={props.delete} />
        </>
      )
  
}

export default SavedButtons
