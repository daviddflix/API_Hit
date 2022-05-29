
const {sequelize} = require('./src/database')
const {server} = require('./src/app')

const port = process.env.PORT || 4000

sequelize.sync({ force: false }).then(() => {
  
  try {
    server.listen(port, () => {
      console.log(`%s server is listening on port ${port}`); 
    });
  } catch (error) {
    console.log(error)
  }
  
   
});