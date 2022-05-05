const {User} = require('../database')


 const getUser = (async (req, res) => {
      const email = req.body || req.query
      console.log('data',email)
    try {
        
      const  users = await User.findAll()
      console.log('users',users)
        if(users.length){
            const usuario = await  User.findAll({where: {email: email.email}});
            console.log('usuario',usuario)
        
          return  res.send(usuario)
        } else{
            res.send('no hay usuarios')  
        }
       
       
           
        
    } catch (error) {
        console.log('algo paso',error)
    }

  
})

module.exports = getUser