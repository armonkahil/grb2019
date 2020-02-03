require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const gradient = require('gradient-string')

const PORT = process.env.PORT || 3001

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/dismissal'
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', `http://localhost:${PORT}`)

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('set-cookie', [
    'same-site-cookie=bar; SameSite=Lax',
    'cross-site-cookie=foo; SameSite=None; Secure'
  ])
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
mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI)

// Start the API server
const server = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
const io = require('socket.io')(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log(gradient.vice(`New client connected to server ${socket.id}`))

  socket.on('bookSaved', data => {
    console.log(gradient.summer(data.message))
    io.emit('bookSaved', data)
  })

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log(gradient.atlas('\nClient disconnected'))
  })
})
