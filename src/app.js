const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', CORS_URL); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
app.use(express.static('public'))


//ROUTES

const route = require('./routes/products')
app.use(route)

app.use(require('./routes/detail'))

module.exports = app