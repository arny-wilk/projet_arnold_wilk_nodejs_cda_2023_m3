import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "orders",
    {
      order_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      total_price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return Order;
};
