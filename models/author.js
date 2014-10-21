"use strict";

module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(db) {
        Author.hasMany(db.Post);
      }
    }
  });

  return Author;
};
