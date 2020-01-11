import axios from 'axios'

export default {
  // Google Books search
  getGoogleSearchBooks: function(search) {
    const queryURL =
    `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=15&orderBy=newest`
    console.log(`queryURL: ${queryURL}`)
    return axios.get(queryURL)
  },
  // Gets all books
    getBooks: async () => {
    let res = await axios.get('/api/books')	    
    return res.data || []	
  },
  saveBook: (bookData) => {
    return axios.post('/api/books', bookData, { })
  },
  deleteBook: id => {
    return axios.delete('/api/books/' + id)
  }
}
