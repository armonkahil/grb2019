const mongoose = require('mongoose')

const { Schema } = mongoose

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    required: true,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  etag: {
    type: String
  }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
