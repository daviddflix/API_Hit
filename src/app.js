const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
app.use(express.json())
// app.use(cors())



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
app.use(express.static('public'))
// app.use(express.urlencoded({extended: false}))


//ROUTES


app.use(require('./routes/products'))
app.use(require('./routes/detail'))
app.use(require('./routes/user'))
app.use(require('./routes/getUser'))
app.use(require('./routes/compras'))
app.use(require('./routes/getAllCompras'))
app.use(require('./routes/pagos'))



module.exports = app