import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/search'
import Saved from './pages/save'
import NoMatch from './pages/nomatch'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Search} />
            <Route exact path='/saved' component={Saved} />
            <Route exact path='/api/books' component={null} />
            <Route exact path='*' component={NoMatch} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
