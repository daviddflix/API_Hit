const data = require('../data/data')
const {Products} = require('../database')


 const products = (async (req, res) => {
    
    try { 
        
        const info = await  Products.findAll();// data de la tabla
       
        if(info.length === 0){
            Products.bulkCreate(data) // llena la Db
          }
          if(info.length){
            res.send(info)
        }
    } catch (error) {
        console.log('algo paso',error)
    }

  
})

module.exports = products