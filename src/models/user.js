const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('user', {
    picture: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phonenumber: {type: DataTypes.INTEGER},
    feedback: {type: DataTypes.STRING},
    nickname: {type: DataTypes.STRING},
    purchases: {type: DataTypes.JSON}
  }, {timestamps: false })
};
