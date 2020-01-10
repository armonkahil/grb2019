import axios from 'axios'

export default {
  // Google Books search
  getGoogleSearchBooks: function(search) {
    console.log(search)
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search)
  },
  // Gets all books
  getBooks: () => {
    return axios.get('/api/books')
  },
  saveBook: bookData => {
    return axios.post('/api/books', bookData)
  },
  deleteBook: id => {
    return axios.delete('/api/books/' + id)
  }
}
