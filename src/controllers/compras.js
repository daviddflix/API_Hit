const {Compras } = require('../database')

 const compras = (async (req, res) => {
  
      const  value = req.body 
      console.log('compras:', value)
    
      const pricesItem =  value.cart.map(el =>  el.unit_price * el.quantity);
      const totalAmount = pricesItem.reduce((prev, curr) => prev + curr, 0)
      console.log('pricesItem',pricesItem)

     
    try {
      if(value){
      const compra = await Compras.create({
          pedido: value.cart,
          total: totalAmount,
          direccionDeEnvio: value.input.direccion,
          celular: value.input.numero,
          zona: value.input.zona,
          name: value.input.nombre
        })

         const id =  value.input.sub
      
         await compra.setUser(id)
         res.send('purchase added')

        } else{
        res.send('purchase not added to the DB, value not provided')
       }    
        
    } catch (error) {
        console.log('algo paso en compras',error)
    }
  
})

module.exports = compras