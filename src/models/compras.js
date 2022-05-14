const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('compras', {
    pedido: {type: DataTypes.ARRAY(DataTypes.JSON)},
    total: {type: DataTypes.STRING},
    direccionDeEnvio: {type: DataTypes.STRING},
    celular: {type: DataTypes.INTEGER},
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
  }, {timestamps: false })
};
