
const {User} = require('../database')

 const user = (async (req, res) => {
    
      const {sub, nombre, direccion, numero, email, zona} = req.body
    try {
 
        
        const usuario = await  User.findAll({where: {id: sub}});// data de la tabla
          
        
       
           if(!usuario.length){
               
          await  User.create({
                email: email,     
                name: nombre,    
                id: sub,
                address: direccion, 
                phonenumber: numero,
                zona: zona
            }) 
          res.send('user added to the DB')
           } else{
             await  User.update({name: nombre, address: direccion, phonenumber:numero , zona: zona}, {where: {id: sub}})
           }
           
           
           
        
    } catch (error) {
        console.log('algo paso',error)
    }

  
})

module.exports = user