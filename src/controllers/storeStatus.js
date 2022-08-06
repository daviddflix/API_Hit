
const {Store} = require('../database')

const store = (async (req, res) => {
   
     const status = req.body
   try {
       
       const getStatus = await  Store.findAll();
         
          if(!getStatus){
              const newStatus = await Store.update({
             status: status,
           }) 
          res.send(newStatus)
          } else{
             res.send('error en status')
          }
          
   } catch (error) {
       console.log('algo paso en store',error)
   }

 
})

module.exports = store