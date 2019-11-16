'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hash: DataTypes.STRING,
  }, {
    underscored: true
  });
  User.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.Post)
  };
  return User;
};