const socketIO = require('socket.io')
const gradient = require('gradient-string')

module.exports = server => {
  const io = socketIO.listen(server)
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
}
