const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('store', {
    status: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING}
  }, {timestamps: false })
};
