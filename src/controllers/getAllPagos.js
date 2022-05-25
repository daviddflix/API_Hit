const {Pagos} = require('../database')


 const getAllPagos = (async (req, res) => {
     
    try {
        
      const  pagos = await Pagos.findAll()
  
        if(pagos.length){
           res.send(pagos)
        } else{
            res.send('no hay Pagos')  
        }    
        
    } catch (error) {
        console.log('algo paso en pagos',error)
    }
})

module.exports = getAllPagos