
const {sequelize} = require('./src/database')
const server = require('./src/app')



sequelize.sync({ force: true }).then(() => {

  
    server.listen(5000, () => {
      console.log('%s server is listening on port 5000'); 
    });
});