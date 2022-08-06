
const {sequelize, Store} = require('./src/database')
const {server} = require('./src/app')

const port = process.env.PORT || 4000

sequelize.sync({ force: true }).then(() => {

  const storeStatus = Store.findAll();

  if(storeStatus.length === 0){
    Store.create({
      status: 'offline',
      name: 'Hit'
    })
  }
  
  try {
    server.listen(port, () => {
      console.log(`%s server is listening on port ${port}`); 
    });
  } catch (error) {
    console.log(error)
  }
  
   
});