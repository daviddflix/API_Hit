
const {User} = require('../database')

 const user = (async (req, res) => {
    
      const {sub, nombre, direccion, numero, email, zona} = req.body
    try {
 
        
        const usuario = await  User.findAll({where: {phonenumber: numero}});
          
           if(!usuario.length){
               
          await  User.create({
                email: email,     
                name: nombre,    
                id: sub,
                address: direccion, 
                phonenumber: numero,
                zona: zona
            }) 
          res.send('client added to the DB')
           } else{
              res.send('client already exit')
           }
           
           
           
        
    } catch (error) {
        console.log('algo paso en user',error)
    }

  
})

module.exports = user