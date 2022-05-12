const {Compras, User} = require('../database')
const axios = require("axios");

const payment = (async (req, res) => {
      
    const itemsToPay = req.body
     
    const url = "https://api.mercadopago.com/checkout/preferences";
    
    try {
        const id = itemsToPay.user.sub
        const user = await User.findAll({where: {id: id}})
          
        if(itemsToPay && user){
            const body = {
                payer_email: user.email,
                items: itemsToPay.cart,
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
              // const user = await User.findAll({where:{id: id}})
              // await compra.setUser(id)
              console.log(payment)
              res.send(payment.data)
        } else{
            res.send('no hay productos a pagar')
        }
    } catch (error) {
        console.log('algo paso en pagos:', error)
    }

  

    
      
})

module.exports = payment
