/* eslint-disable no-alert */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import openSocket from 'socket.io-client'
import { Row, Column } from './components/Grid'
import Search from './pages/search'
import Saved from './pages/save'
import NoMatch from './pages/nomatch'
import Navbar from './components/Navbar'
import 'animate.css/animate.css'
import devSocket from './utils/setdev'

const socket = openSocket(devSocket)
function App() {
  socket.on('bookSaved', data => {
    console.log('A book has been saved', data)
    alert(data.message)
  })
  return (
    <Row styling='justify-content-center align-self-center mx-0'>
      <Column
        size='xl-8 lg-8 xs-12 sm-10'
        styling='container align-self-center justify-content-center'
      >
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Search} />
            <Route exact path='/saved' component={Saved} />
            <Route exact path='*' component={NoMatch} />
          </Switch>
        </Router>
      </Column>
    </Row>
  )
}

export default App
