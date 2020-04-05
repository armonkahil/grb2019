import axios from 'axios'

export default {
  // Google Books search
  getGoogleSearchBooks: search => {
    const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=15`
    return axios.get(queryURL)
  },
  // Gets all books
  getBooks: async () => {
    const res = await axios.get('/api/books')
    return res.data || []
  },
  // Save a book
  saveBook: async bookData => {
    const res = await axios.post('/api/books', bookData)
    return res.data || []
  },
  // delete a book
  deleteBook: id => {
    return axios.delete(`/api/books/${id}`)
  }
}
