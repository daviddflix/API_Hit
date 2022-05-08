const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('pagos', {
    name: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phonenumber: {type: DataTypes.INTEGER},
    priceofpurchase: {type: DataTypes.INTEGER}
  }, {timestamps: false })
};