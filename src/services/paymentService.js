const axios = require("axios");
const {Compras, User} = require('../database')

class PaymentService {
  async createPayment() {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const itemsToPay = req.body

    const id = itemsToPay.map(p => p.id)
    console.log('idinfo:', id)
    const user = await User.findAll({where: {id: id}})
    console.log('userinfo:', user)
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

    return payment.data;
  }

}

module.exports = PaymentService;