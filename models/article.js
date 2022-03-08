'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    markdown: DataTypes.STRING,
    createdAt: DataTypes.DATE
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};
