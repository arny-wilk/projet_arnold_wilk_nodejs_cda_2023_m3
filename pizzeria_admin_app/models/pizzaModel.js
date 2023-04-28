import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Pizza = sequelize.define("pizza", {
    pizza_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    pizza_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });
  return Pizza;
};
