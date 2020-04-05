import React from 'react'
import { SaveBtn, ViewBtn } from '../Buttons'

const UnSavedButtons = ({ id, link, handleSave, onClick }) => {
  return (
    <>
      <SaveBtn key={id} onClick={handleSave} />
      <ViewBtn link={link} onClick={onClick} />
    </>
  )
}
export default UnSavedButtons
