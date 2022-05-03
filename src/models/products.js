const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('products', {
    image: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER}
  }, {timestamps: false })
};
