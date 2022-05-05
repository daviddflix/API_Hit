
const {sequelize} = require('./src/database')
const server = require('./src/app')

const port = process.env.PORT || 5000

sequelize.sync({ force: true }).then(() => {

  
    server.listen(port, () => {
      console.log('%s server is listening on port 5000'); 
    });
});