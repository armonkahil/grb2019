import React from 'react'
import { SearchBtn } from '../Buttons'

function SearchThis(props) {
  return (
      <div className='card container card-body text-center'>
        <h1 className='card-title text-light'>Book Search</h1>
        <input
          className='form-control'
          type='text'
          placeholder='Search for a Book...'
          name='search'
          value={props.search}
          onChange={props.handleInputChange}
        ></input>
        <SearchBtn handleSubmit={props.handleSubmit} />
      </div>
  )
}

export default SearchThis
