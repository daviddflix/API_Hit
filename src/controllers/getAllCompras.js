const {Compras} = require('../database')

 const getAllCompras = (async (req, res) => {
     
    try {
       
    
      const  compras = await Compras.findAll()
  
        if(compras.length){
           res.send(compras)
        } else{
            res.send('no hay compras')  
        }    
        
    } catch (error) {
        console.log('algo paso',error)
    }
})

module.exports = getAllCompras