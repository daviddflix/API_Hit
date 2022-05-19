const {Compras, User } = require('../database')

 const compras = (async (req, res) => {
      const  value = req.body 
     
    
      const pricesItem =  value.cart.map(p => p.unit_price)
      const total = pricesItem.reduce((prev, curr) => prev + curr, 0)

     
    try {
      if(value){
      const compra = await Compras.create({
          pedido: value.cart,
          total: total,
          direccionDeEnvio: value.input.direccion,
          celular: value.input.numero,
          zona: value.input.zona
        })

         const id =  value.input.sub
         const user = await User.findAll({where:{id: id}})
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