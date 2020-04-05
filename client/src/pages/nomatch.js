import React from 'react'
import { Column, Row, Container } from '../components/Grid'
import Jumbotron from '../components/Jumbotron'

function NoMatch() {
  return (
    <Container>
      <Row styling=' row align-self-center'>
        <Column>
          <Jumbotron title='404 Page Not Found' lead='🙄' />
        </Column>
      </Row>
    </Container>
  )
}

export default NoMatch
