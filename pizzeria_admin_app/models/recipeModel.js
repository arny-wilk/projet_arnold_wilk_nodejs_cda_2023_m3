import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Recipe = sequelize.define("recipe");
  return Recipe;
};
