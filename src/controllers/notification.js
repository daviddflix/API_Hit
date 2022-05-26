const app = require('../app') 
const {Pagos} = require('../database')
const axios = require("axios");
const { Server } = require('socket.io')
const io = new Server(app)

// const accountSid = 'ACcf9366d9570236546173ca619d4d6a5a'; 
// const authToken = process.env.AUTHTOKEN; 
// const client = require('twilio')(accountSid, authToken); 

// var mercadopago = require('mercadopago');
// mercadopago.configurations.setAccessToken(process.env.TEST_ACCESS_TOKEN);

io.on('connection', (socket) => {
  console.log('a user connected');
});

const notification = (async(req, res) => {

    console.log('query:',req.query)
    console.log('body:',req.body)

     try {
        const id = req.body.data.id
   
        const url = `https://api.mercadopago.com/v1/payments/${id}`

        const payment = await axios.get(url, {
                     headers: {
                       Authorization: `Bearer ${process.env.TEST_ACCESS_TOKEN}`
                     }
                   });
        
                  if(payment.data.status === 'approved'){
                    const pago = await Pagos.create({
                      monto: payment.transaction_amount,
                      dni: payment.payer.identification.number,
                      method: payment.payment_type_id,
                      email: payment.payer.email,
                      status: payment.data.status
                    })
                
                    await pago.setUser(itemsToPay.user.sub)
                    res.sendStatus(200)
                  } 
                         
                   res.sendStatus(200)
                   console.log('datosPayment:', payment.data.status)
     } catch (error) {
         console.log('errorNotification:', error)
     }
      
      
    
             
    
})

module.exports = notification







// var payment_data = {
//     transaction_amount: totalAmount,
//     // token: req.body.token,
//     // description: req.body.description,
//     // installments: Number(req.body.installments),
//     // payment_method_id: req.body.paymentMethodId,
//     // issuer_id: req.body.issuer,
//     notification_url: "https://hit-pasta.herokuapp.com/postnotification",
//     payer: {
//       email: items.user.email,
//     //   identification: {
//     //     type: req.body.docType,
//     //     number: req.body.docNumber
//     //   }
//     }
//   };
  
//   mercadopago.payment.save(payment_data)
//     .then(function(response) {
//         console.log('notification: ', response)
//       res.status(response.status).json({
//         status: response.body.status,
//         status_detail: response.body.status_detail,
//         id: response.body.id
//       });
//     })
//     .catch(function(error) {
//       console.log('errornotification: ', error)
//     });




  //  client.messages 
  //     .create({ 
  //        body: 'Tu orden ha sido creada con exito. Para hacer otro pedido visita nuestra pagina: https.hitpasta.vercel.app', 
  //        from: 'whatsapp:+14155238886',       
  //        to: `whatsapp:+549${user[0].phonenumber}`
  //      }) 
  //     .then(message => console.log(message.sid)) 
  //     .done();