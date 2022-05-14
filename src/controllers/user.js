const {User} = require('../database')


 const user = (async (req, res) => {
    
      const {sub, nombre, direccion, numero, email} = req.body
    try {
 
        
        const usuario = await  User.findAll({where: {id: sub}});// data de la tabla
          
        
       
           if(!usuario.length){
               
          await  User.create({
                email: email,     
                name: nombre,    
                id: sub,
                address: direccion, 
                phonenumber: numero
            }) 
          res.send('user added to the DB')
           } else{
               res.send('user already exist')
           }
           
           
           
        
    } catch (error) {
        console.log('algo paso',error)
    }

  
})

module.exports = user