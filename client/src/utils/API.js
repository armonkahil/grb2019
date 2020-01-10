import axios from "axios";

export default {
  // Google Books search
  getGoogleSearchBooks: function(search) {
    console.log(search)
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search)
  },
  // Gets all books
  getBooks: async () => {
    let res = await axios.get('/api/books')
    return res.data || []
  },
  // Deletes the book with the given id
  deleteBook: async id => {
    let res = await axios.delete('/api/books/' + id)
    return res.data || []
  },
  //Saves a book to the database
  // saveBook: async (bookData) => {
  //   let res = await axios.post("/api/books", bookData)
  //   return res.data || [];
  // }
  saveBook: (bookData) => {
    return axios.post("/api/books", bookData)
  }
  
}
