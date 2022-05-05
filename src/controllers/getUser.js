const {User} = require('../database')


 const getUser = (async (req, res) => {
      const email = req.body || req.query
      console.log('data',email)
    try {
        
        const usuario = await  User.findOne({where: {email: email}});
        console.log('info',usuario)
        
          res.send(usuario)
           
        
    } catch (error) {
        console.log('algo paso',error)
    }

  
})

module.exports = getUser