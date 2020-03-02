import React from 'react'
import { SearchBtn } from '../Buttons'

function SearchThis(props) {
  return (
    <div className='card card-body text-center'>
      <h1 className='card-title'>Book Search</h1>
      <form onSubmit={props.handleSubmit}>
        <input
          className='form-control'
          type='text'
          placeholder='Search for a Book...'
          name='search'
          value={props.search}
          onChange={props.handleInputChange}
        />
        <SearchBtn handleSubmit={props.handleSubmit} />
      </form>
    </div>
  )
}

export default SearchThis
