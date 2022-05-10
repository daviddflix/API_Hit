const {User} = require('../database')


 const user = (async (req, res) => {
      const {email, nombre, numero, direccion, user_id} = req.body
    
    try {

        
        const usuario = await  User.findAll({where: {id: user_id}});// data de la tabla
        console.log('user:',usuario)
        
       
           if(!usuario.length){
          await  User.create({
                email,
                name: nombre,    
                phonenumber: numero,
                address: direccion, 
                id: user_id,

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