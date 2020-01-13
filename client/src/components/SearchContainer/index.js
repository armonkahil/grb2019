import React from 'react'
import { SearchBtn } from '../Buttons'

function SearchThis(props) {
  return (
    <div className='card card-body'>
      <div className='row container-fluid'>
      </div>
      <div className='row container-fluid'>
        <div className='card-body text-center'>
          <h1 className="card-title ">Book Search</h1>
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
      </div>
    </div>
  )
}

export default SearchThis
