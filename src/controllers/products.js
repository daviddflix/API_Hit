const data = require('../data/data')
const { Products } = require('../database')


 const products = (async (req, res) => {
    
    try { 
        const data = await Products.findAll();// data de la tabla
        res.send(data)

    } catch (error) {
        console.log('algo paso products',error)
    }
})

module.exports = products