
const {Pagos, User} = require('../database')
const axios = require("axios");

// const accountSid = 'ACcf9366d9570236546173ca619d4d6a5a'; 
// const authToken = process.env.AUTHTOKEN; 
// const client = require('twilio')(accountSid, authToken); 

// var mercadopago = require('mercadopago');
// mercadopago.configurations.setAccessToken(process.env.TEST_ACCESS_TOKEN);


const notification = (async(req, res) => {

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
                  
                 
                   const findUser = await User.finAll({where: {name: payment.data.additional_info.payer.first_name}})

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
                  
                    res.sendStatus(200).json({data: pago})
                  } else {
                    res.sendStatus(200)
                  }
                         
                  
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