const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const orderDessert = sequelize.define("order_dessert", {
    order_des: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quant_dessert: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return orderDessert;
};
