import React from 'react'
import Spinner from '../Spinner'

function NoResults({ loading, children }) {
  return !loading ? (
    <div className='mx-auto'>
      <h3 className='text-center text-dark'>
        No Results to Display{children}
      </h3>
    </div>
  ) : (
    <Spinner />
  )
}

export default NoResults
