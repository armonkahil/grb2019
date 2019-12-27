import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import Row from '../components/Row'
import SearchThis from '../components/SearchContainer'

class Search extends Component {

  render() {
    return (
      <>
      <Row>
          <Jumbotron />
      </Row>
      <Row>
          <SearchThis />
      </Row>
        </>
  )
}
}

export default Search