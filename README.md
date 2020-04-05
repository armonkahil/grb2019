# Google React Books

[![Build Status](https://travis-ci.com/armonkahil/grb2019.svg?branch=master)](https://travis-ci.com/armonkahil/grb2019) [![Maintainability](https://api.codeclimate.com/v1/badges/ac003e3eded1805d48eb/maintainability)](https://codeclimate.com/github/armonkahil/grb2019/maintainability)

### A Full Stack Mern App

![Landing](client/public/search.png)

### Deployed to [Heroku](https://grb2019.herokuapp.com/)

This is a full-stack MERN app that sources Google Books API. The user can search for anything in the google books store. Those results are then rendered to the page where the user can then save favorites to MongoDB. By using Socket.io, every time a book is saved, all open browsers using the app are alerted.

#Technology Used

- React
- MongoDB
- Node
- Express
- if-Env
- Mongoose
- dotenv
- body-parser
- ESlint
- nodemon
- concurrently
- Create-react-app
- Heroku
- Mlab
- Socket.io

![Landing](client/public/saved.png)
