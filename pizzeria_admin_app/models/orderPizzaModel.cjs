module.exports = (sequelize, DataTypes) => {
  const OrderPizza = sequelize.define("order_pizza", {
      pizza_op_id: {
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
