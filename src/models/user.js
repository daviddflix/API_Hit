const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('user', {
    name: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phonenumber: {type: DataTypes.INTEGER},
    id: {type: DataTypes.STRING, primaryKey: true}
  }, {timestamps: false })
};
