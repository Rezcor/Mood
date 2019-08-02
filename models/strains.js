module.exports = function(sequelize, DataTypes) {
    var Strains = sequelize.define("Strains", {
      name: DataTypes.STRING,
      strain: DataTypes.STRING,
    });
    return Strains;
  };
  