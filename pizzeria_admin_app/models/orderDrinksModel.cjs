const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const orderDrinks = sequelize.define("order_drinks", {
    drink_op_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quant_drinks: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return orderDrinks;
};
