const {User} = require('../database')


 const user = (async (req, res) => {
     console.log('re.body:',req.body)
      const {sub, nombre, direccion, numero, email} = req.body
    try {
 
        
        const usuario = await  User.findAll({where: {id: sub}});// data de la tabla
        console.log('user:',usuario)
        
       
           if(!usuario.length){
          await  User.create({
                email: email,     
                name: nombre,    
                id: sub,

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