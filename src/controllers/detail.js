const data = require('../data/data')
const {Products} = require('../database')


 const details = (async (req, res) => {
    const {id} = req.params
    try { 
        const info = await  Products.findByPk(id);
       info? res.send(info) : res.sendStatus(404)
            
    } catch (error) {
        console.log('algo paso',error)
    }

  
})

module.exports = details