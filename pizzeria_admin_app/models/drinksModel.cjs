const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Drinks = sequelize.define("drinks", {
    drink_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    drink_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  return Drinks;
};
