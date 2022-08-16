
const {Store} = require('../database')

const store = (async (req, res) => {
   
     const status = req.body
   try {
       
       const getStatus = await Store.findAll();
         
          if(!getStatus){
              const newStatus = await Store.update({status: status}, {where: {id: 1}, returning: true, plain: true} ) 
          res.send(newStatus)
          } else{
             res.send('error en status')
          }
          
   } catch (error) {
       console.log('algo paso en store',error)
   }

 
})

const getStatusStore = (async (req, res) => {
   
    const status = req.body
  try {
      
      const getStatus = await Store.findAll();
        
         if(getStatus){ 
         res.send(getStatus)
         } 
         
  } catch (error) {
      console.log('algo paso en getStatusStore',error)
  }


})

module.exports = {store, getStatusStore}