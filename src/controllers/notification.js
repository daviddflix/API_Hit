const {Pagos} = require('../database')

// var mercadopago = require('mercadopago');
// mercadopago.configurations.setAccessToken(process.env.TEST_ACCESS_TOKEN);

const notification = (async(req, res) => {

    console.log('body:',req.body)
    res.sendStatus(200)

   const url = `https://api.mercadopago.com/v1/payments/${req.body.id}`

   const payment = await axios.get(url, {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${process.env.TEST_ACCESS_TOKEN}`
                }
              });

              console.log('datosPayment:', payment)

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