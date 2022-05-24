const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('pagos', {
    monto: {type: DataTypes.INTEGER},
    method: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
  }, {timestamps: true })
};