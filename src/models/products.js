const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('products', {
    picture_url: {type: DataTypes.STRING},
    title: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    salsas: {type: DataTypes.JSON},
    pastas: {type: DataTypes.JSON},
    toppings: {type: DataTypes.JSON},
  }, {timestamps: false })
};
