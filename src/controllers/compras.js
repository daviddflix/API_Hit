const {Compras, User } = require('../database')

 const compras = (async (req, res) => {
      const  value = req.body || req.query
     
 //       prices of each item
      const pricesItem =  value.map(p => p.unit_price)
      
      const total = pricesItem.reduce((prev, curr) => prev + curr, 0)

      

      
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