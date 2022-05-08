const {Compras} = require('../database')

// {finalPrice, 
//   Comments, 
//   picture, 
//   price, 
//   product,
//   id,
//   priceTopping, salsa, toppings_finals}

// Compras.create({
//   image: picture,
//   pastas: product,
//   price: finalPrice,
//   salsas: salsa,
//   comments: Comments,
//   toppings: toppings_finals
// })

 const compras = (async (req, res) => {
      const  value = req.body || req.query
     

    try {

        
       if(value){
         console.log('value',value)
        res.send('purchase added')
       } else{
        res.send('purchase not added to the DB, value not provided')
       }    
        
    } catch (error) {
        console.log('algo paso',error)
    }
  
})

module.exports = compras