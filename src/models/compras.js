const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('compras', {
    pedido: {type: DataTypes.ARRAY(DataTypes.JSON)},
    total: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    direccionDeEnvio: {type: DataTypes.STRING},
    celular: {type: DataTypes.BIGINT},
    zona: {type: DataTypes.STRING},
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
  }, {timestamps: true })
};
