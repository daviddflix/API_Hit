
const {sequelize, Store, Products} = require('./src/database')
const {server} = require('./src/app')
const data = require('./src/data/data')

const port = process.env.PORT || 4000

sequelize.sync({ force: true }).then(async() => {

  const storeStatus = await Store.findAll();
  const info = await Products.findAll();// data de la tabla
  
  if(storeStatus.length === 0){
    Store.create({
      status: 'offline',
      name: 'Hit',
      email: 'hitpasta@gmail.com',
      password: '1234567'
    })
  }

  if(info.length === 0){
     Products.bulkCreate(data) // llena la tabla
    }
  
  try {
    server.listen(port, () => {
      console.log(`%s server is listening on port ${port}`); 
    });
  } catch (error) {
    console.log(error)
  }
  
   
});