const { Op } = require('sequelize');
const {User, Compras, Pagos} = require('../database')


 const getUser = (async (req, res) => {
      const {email, name, phonenumber} =  req.query
     
    try {
        
      const  users = await User.findAll()
     
        if(users.length){
          if(email){

            const UserByPhone = await  User.findAll({where: {phonenumber : {[Op.iLike]: '%'+ phonenumber + '%'}}, include: [Compras, Pagos]});
            const UserByEmail = await  User.findAll({where: {email : {[Op.iLike]: '%'+ email + '%'}}, include: [Compras, Pagos]});
            const UserByName = await  User.findAll({where: {name : {[Op.iLike]: '%'+ name + '%'}}, include: [Compras, Pagos]});

            if(UserByPhone){
              res.send(UserByPhone)
            } else{
              res.send('user not found')
            }

            if(UserByEmail){
              res.send(UserByEmail)
            } else{
              res.send('user not found')
            }

            if(UserByName){
              res.send(UserByName)
            } else{
              res.send('user not found')
            }
        

          }else{
            res.send(users)  
        }
            
          
        } else{
            res.send('DB empty')  
        }
       
       
           
        
    } catch (error) {
        console.log('algo paso',error)
    }

  
})

module.exports = getUser