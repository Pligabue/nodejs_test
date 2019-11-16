'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
      underscored: true
  });
  Post.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.User)
  };
  return Post;
};