const {User, Compras} = require('../database')


 const getUser = (async (req, res) => {
      const id = req.body || req.query
     
    try {
        
      const  users = await User.findAll()
     
        if(users.length){
            const usuario = await  User.findAll({where: {id: id}, include: [Compras]});
            
        
          return  res.send(usuario)
        } else{
            res.send('no hay usuarios')  
        }
       
       
           
        
    } catch (error) {
        console.log('algo paso',error)
    }

  
})

module.exports = getUser