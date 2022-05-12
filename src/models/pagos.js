const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('pagos', {
    monto: {type: DataTypes.INTEGER},
    method: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phonenumber: {type: DataTypes.INTEGER},
    id: {type: DataTypes.STRING, primaryKey: true}
  }, {timestamps: true })
};