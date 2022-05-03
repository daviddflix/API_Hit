const data = require('../data/data')
const {Products} = require('../database')


 const products = (async (req, res) => {
    
    try {
        
        const info = await  Products.findAll();// data de la tabla
        console.log('info',info)
        if(!info.length){
            Products.bulkCreate(data) // llena la Db
          }
          if(info.length != 0){
            res.send(info)
        }
    } catch (error) {
        console.log('algo paso',error)
    }

  
})

module.exports = products