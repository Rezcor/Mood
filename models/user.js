module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("User", {
    name: DataTypes.STRING,
    strain: DataTypes.STRING,
    mood: DataTypes.STRING,
  });
  return Users;
};
