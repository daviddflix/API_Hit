
const {User} = require('../database')

 const createUser = (async (req, res) => {
    
      const {sub, nombre, direccion, numero, email, zona} = req.body
    try {
 
        const usuario = await  User.findAll({where: {phonenumber: numero}});
          
           if(!usuario.length){
               
          await  User.create({
                email: email,     
                name: nombre,    
                id: sub,
                address: direccion, 
                phonenumber: numero,
                zona: zona
            }) 
          res.send('client added to the DB')
           } else{
              res.send('client already exit')
           }
           
           
           
        
    } catch (error) {
        console.log('algo paso en createUser',error)
    }

  
})

const getAllUsers = (async (req, res) => {
    
  try {

      const usuarios = await User.findAll();
        
         if(usuarios.length > 0){
            
        res.send(usuarios)

         } else{
            res.send('client DB empty')
         }
      
  } catch (error) {
      console.log('algo paso en getAllUsers',error)
  }


})

const getUserById = (async (req, res) => {

    const {id} = req.params
    
    try {
  
        const usuario = await User.findByPk(id);
          
           if(usuario.length > 0){
              
          res.send(usuario)
  
           } else{
              res.send('client not found')
           }
        
    } catch (error) {
        console.log('algo paso en getUserById',error)
    }
  
  
  })



// const UserByEmail = await  User.findAll({where: {email : {[Op.iLike]: '%'+ email + '%'}}, include: [Compras, Pagos]});
module.exports = {createUser, getAllUsers, getUserById}