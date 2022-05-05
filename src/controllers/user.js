const {User} = require('../database')


 const user = (async (req, res) => {
      const {email, name, nickname, phonenumber, address, picture, feedback, purchases} = req.body
      console.log('data',name)
    try {
        
        const usuario = await  User.findAll({where: {name: name}});// data de la tabla
        console.log('potuer',usuario)
        
       
           if(!usuario.length){
            User.create({
                email,
                name, 
                nickname,
                phonenumber,
                address, 
                picture, 
                feedback, 
                purchases

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