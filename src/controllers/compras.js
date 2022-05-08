const {Compras} = require('../database')

// toppings_finals: [],
// salsa: [],
// priceTopping: null,
// id: '',
// product: '',
// price: 0,
// picture: '',
// Comments: '',
// finalPrice: 0

 const compras = (async (req, res) => {
      const {finalPrice, 
        Comments, 
        picture, 
        price, 
        product,
        id,
        priceTopping, salsa, toppings_finals} = req.body || req.query
      console.log('data', finalPrice)

    try {
        
        const compra = await  Compras.findAll();// data de la tabla
        console.log('compra',compra)
        
       if(finalPrice){
        Compras.create({
            image: picture,
            pastas: product,
            price: finalPrice,
            salsas: salsa,
            comments: Comments,
            toppings: toppings_finals
        })
        res.send('purchase added')
       } else{
        res.send('purchase not added to the DB, PRICE not provided')
       }    
        
    } catch (error) {
        console.log('algo paso',error)
    }
  
})

module.exports = compras