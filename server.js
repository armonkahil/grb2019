require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)

const PORT = process.env.PORT || 3001

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/armon'
console.log('MONGODB_URI:', MONGODB_URI)
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', `http://localhost:${PORT}`)

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
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
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
