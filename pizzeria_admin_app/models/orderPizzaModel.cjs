const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const OrderPizza = sequelize.define("order_pizza", {
      order_pizz: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quant_pizza: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
});
  return OrderPizza;
};
