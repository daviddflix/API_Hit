
const {Pagos, User} = require('./database')
const axios = require("axios");
const express = require('express');
const http = require("http");
const { Server } = require("socket.io")

const app = express()
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin : "http://localhost:3000",
    credentials: true,
  }
})

const path = require('path')
const cors = require('cors')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser');


app.use(express.json())



app.post('/postnotification',async (req, res) => {
  console.log('body:',req.body)

     try {
        const id = req.body.data.id
   
        const url = `https://api.mercadopago.com/v1/payments/${id}`

        const payment = await axios.get(url, {
                     headers: {
                       Authorization: `Bearer ${process.env.TEST_ACCESS_TOKEN}`
                     }
                   });
                   console.log('payment:', payment.data)
                   console.log('payment.payer:', payment.data.payer)
                  
                 
                   const findUser = await User.findOne({where: {name: payment.data.additional_info.payer.first_name}})

                   console.log('findUser:', findUser)
                   
                  if(payment.data.status === 'approved'){
                    const pago = await Pagos.create({
                      monto: payment.data.transaction_amount,
                      dni: payment.data.payer.identification.number,
                      method: payment.data.payment_type_id,
                      email: payment.data.payer.email,
                      status: payment.data.status,
                      name: payment.data.payer.first_name,
                      items: payment.data.additional_info.items
                    })
                
                    await pago.setUser(findUser.id)

                   
                    io.on('connection', (socket) => {
                      console.log('client connect', socket.id)
                      socket.emit('message', {message: pago})

                    })

                    res.sendStatus(200)
                  } else {
                    res.sendStatus(200)
                  }


                         
                  
     } catch (error) {
         console.log('errorNotification:', error)
     }
      
      
})




app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use(express.static('public'))
app.use(favicon(path.join('public','favicon.ico')))


app.use(require('./routes/products'))
app.use(require('./routes/detail'))
app.use(require('./routes/user'))
app.use(require('./routes/getUser'))
app.use(require('./routes/compras'))
app.use(require('./routes/getAllCompras'))
app.use(require('./routes/pagos'))
// app.use(require('./routes/notification'))
app.use(require('./routes/getAllPagos'))


module.exports = {server, io}