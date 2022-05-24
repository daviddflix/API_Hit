const {Pagos} = require('../database')

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN);

const notification = (async(req, res) => {
    console.log('body:',req.body)
    // var payment_data = {
    //     transaction_amount: Number(req.body.transactionAmount),
    //     token: req.body.token,
    //     description: req.body.description,
    //     installments: Number(req.body.installments),
    //     payment_method_id: req.body.paymentMethodId,
    //     issuer_id: req.body.issuer,
    //     notification_url: "http://requestbin.fullcontact.com/1ogudgk1",
    //     payer: {
    //       email: req.body.email,
    //       identification: {
    //         type: req.body.docType,
    //         number: req.body.docNumber
    //       }
    //     }
    //   };
      
    //   mercadopago.payment.save(payment_data)
    //     .then(function(response) {
    //       res.status(response.status).json({
    //         status: response.body.status,
    //         status_detail: response.body.status_detail,
    //         id: response.body.id
    //       });
    //     })
        // .catch(function(error) {
        //   res.status(response.status).send(error);
        // });

    // https://api.mercadopago.com/v1/payments/[ID]

    res.sendStatus(200)
})

module.exports = notification