const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const size = sequelize.define("size", {
    size_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  return size;
};
