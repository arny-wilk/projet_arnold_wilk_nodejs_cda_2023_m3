import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Ingredients = sequelize.define("ingredients", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    sauce: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cheese: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vegetables: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    topping: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Ingredients;
};
