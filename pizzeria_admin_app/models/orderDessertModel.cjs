module.exports = (sequelize, DataTypes) => {
  const orderDessert = sequelize.define("order_dessert", {
    dessert_op_id: {
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
