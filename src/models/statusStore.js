const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('store', {
    status: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
  }, {timestamps: false })
};
