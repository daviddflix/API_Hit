const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('user', {
    name: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phonenumber: {type: DataTypes.INTEGER},
    zona: {type: DataTypes.STRING},
  }, {timestamps: false })
};
