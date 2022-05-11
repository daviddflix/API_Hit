const {Compras, User} = require('../database')
const axios = require("axios");

const payment = (async (req, res) => {
      console.log('req.body pagos', req.body)
    const itemsToPay = req.body
      console.log('itemstopay', itemsToPay)
    const url = "https://api.mercadopago.com/checkout/preferences";
    
    try {
        const id = itemsToPay.map(p => p.id)
        const user = await User.findAll({where: {id: id}})
        
        if(itemsToPay && user){
            const body = {
                payer_email: user.email,
                items: itemsToPay,
                back_urls: {
                  failure: "/failure",
                  pending: "/pending",
                  success: "/success"
                }
              };
          
              const payment = await axios.post(url, body, {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
              });
              res.send(payment.data)
        } else{
            res.send('no hay productos a pagar')
        }
    } catch (error) {
        console.log('algo paso:', error)
    }

  

    
      
})

module.exports = payment
