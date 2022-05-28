const {Pagos, User} = require('../database')
const axios = require("axios");
const mercadopago = require ('mercadopago');


const payment = (async (req, res) => {
      
    const itemsToPay = req.body


  // Agrega credenciales
  mercadopago.configure({
    access_token: process.env.TEST_ACCESS_TOKEN
  });

  let preference = {
    items: itemsToPay.cart,
    auto_return:'approved',
    back_urls: {
      failure: "https://hitpasta.vercel.app",
      pending: "https://hitpasta.vercel.app",
      success: "https://hitpasta.vercel.app"
    },
    binary_mode:true,
    
    
  };
    mercadopago.preferences.create(preference)
    .then(function(response){
      
      res.send(response.body.init_point)
      console.log('response:', response.body)
      
    }).catch(function(error){
      console.log(error);
    });

  
          
})

module.exports = payment















   // const url = "https://api.mercadopago.com/checkout/preferences";
    
    // try {
    //     const id = itemsToPay.user.sub
    //     const user = await User.findAll({where: {id: id}})
          
    //     if(itemsToPay && user){
    //         const body = {
    //             payer_email: itemsToPay.user.email,
    //             items: itemsToPay.cart,
    //             back_urls: {
    //               failure: "/failure",
    //               pending: "/pending",
    //               success: "/success"
    //             }
    //           };
          
    //           const payment = await axios.post(url, body, {
    //             headers: {
    //               "Content-Type": "application/json",
    //               Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    //             }
    //           });
    //           // const user = await User.findAll({where:{id: id}})
    //           // await payment.setUser(id)
    //           console.log('payment:', payment)
    //           res.send(payment.data)
    //     } else{
    //         res.send('no hay productos a pagar')
    //     }
    // } catch (error) {
    //     console.log('algo paso en pagos:', error)
    // }

  // SDK de Mercado Pago
