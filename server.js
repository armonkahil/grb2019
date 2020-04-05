/* eslint-disable no-console */
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')
const sockets = require('./sockets')

const PORT = process.env.PORT || 3001
const app = express()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/dismissal'
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.header({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
      'Content-Type': 'application/json; charset=utf-8',
      'set-cookie': [
        'same-site-cookie=bar; SameSite=Lax',
        'cross-site-cookie=foo; SameSite=None; Secure'
      ]
    })
  }
  next()
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}
// Add routes, both API and view
app.use(routes)

// Connect to the Mongo DB
mongoose.Promise = global.Promise
//  console.log('global:', global.Promise)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI)

// Start the API server
const server = app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
// Start Socket.io
sockets(server)
