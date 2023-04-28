import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Recipe = sequelize.define("recipe", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    recipeIngredient: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Recipe;
};
