const {io} = require('../app')   

const sendNotification = (async(req, res) => {
 try {

   res.send('server with socket')
    
 } catch (error) {
     console.log('error en sendNotification', error)
 }
   
      
    
             
    
})

module.exports = sendNotification