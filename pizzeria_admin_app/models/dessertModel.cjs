const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Dessert = sequelize.define("dessert", {
    dessert_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dessert_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  return Dessert;
};
