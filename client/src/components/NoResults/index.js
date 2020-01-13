import React from "react"
import Spinner from "../Spinner"
function NoResults(props) {
  return (
    !props.loading ? (
      <h3 className='text-center text-light'>No Results to Display{props.children}</h3>
    ) : (
        <Spinner />
    )
  )
}

export default NoResults