import React from "react"
import Spinner from "../Spinner"
function NoResults(props) {
  return (
    !props.loading ? (
      <div className='mx-auto'>
        <h3 className='text-center text-light'>No Results to Display{props.children}</h3>
        </div>
    ) : (
        <Spinner />
    )
  )
}

export default NoResults