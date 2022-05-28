const { Op } = require('sequelize');
const {User, Compras, Pagos} = require('../database')


 const getUser = (async (req, res) => {
      const {phonenumber, email, name} =  req.query
     
    try {
        
      const  users = await User.findAll()
     
        if(users.length && phonenumber || email || name){
            const UserByPhone = await  User.findAll({where: {phonenumber : {[Op.iLike]: '%'+ phonenumber + '%'}}, include: [Compras, Pagos]});
            const UserByEmail = await  User.findAll({where: {phonenumber : {[Op.iLike]: '%'+ email + '%'}}, include: [Compras, Pagos]});
            const UserByName = await  User.findAll({where: {phonenumber : {[Op.iLike]: '%'+ name + '%'}}, include: [Compras, Pagos]});

            if(UserByPhone){
              res.send(UserByPhone)
            }

            if(UserByEmail){
              res.send(UserByEmail)
            }
            if(UserByName){
              res.send(UserByName)
            }
        
          
        } else{
            res.send(users)  
        }
       
       
           
        
    } catch (error) {
        console.log('algo paso',error)
    }

  
})

module.exports = getUser