const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('pagos', {
    name: {type: DataTypes.STRING},
    dni: {type: DataTypes.BIGINT},
    monto: {type: DataTypes.INTEGER},
    method: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING},
    items: {type: DataTypes.JSON},
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true}
  }, {timestamps: true })
};