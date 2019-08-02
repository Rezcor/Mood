module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("User", {
    name: DataTypes.STRING,
    strain: DataTypes.BOOLEAN,
    mood: DataTypes.STRING,
  });
  return Users;
};
