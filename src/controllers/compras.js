const {Compras, User } = require('../database')

// for (const i in value) {
//   console.log(value)
//  await  Compras.create({
//     image: value[i].picture,
//     pastas: value[i].product,
//     price: value[i].finalPrice,
//     salsas: value[i].salsa,
//     comments: value[i].Comments,
//     toppings: value[i].toppings_finals
//   })
//     res.send('compra agregada a la DB')
//   }

 const compras = (async (req, res) => {
      const  value = req.body || req.query
     console.log('value:', value)
 //       prices of each item
      const pricesItem =  value.map(p => p.finalPrice)
      const total = pricesItem.reduce((prev, curr) => prev + curr, 0)

      // id 

      
    try {
      if(value){
      const compra = await Compras.create({
          pedido: value,
          total: total
        })

         const id =  value.map(p => p.id)
      const user = await User.findAll({where:{id: id[0]}})
 
        await compra.addUser(user)
         res.send('purchase added')

        } else{
        res.send('purchase not added to the DB, value not provided')
       }    
        
    } catch (error) {
        console.log('algo paso',error)
    }
  
})

module.exports = compras