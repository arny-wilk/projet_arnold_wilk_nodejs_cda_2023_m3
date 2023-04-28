import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Pizza = sequelize.define("pizza", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    pizzaName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Pizza;
};
