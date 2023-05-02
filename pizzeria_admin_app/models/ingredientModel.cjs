const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Ingredients = sequelize.define("ingredients", {
    ingredient_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
