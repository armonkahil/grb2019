import React from 'react'
import { Col, Row, Container } from '../components/Grid'
import Jumbotron from '../components/Jumbotron'

function NoMatch() {
  return (
    <Container>
      <Row spacing=' row align-self-center'>
        <Col>
          <Jumbotron title='404 Page Not Found' lead='🙄'></Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default NoMatch
