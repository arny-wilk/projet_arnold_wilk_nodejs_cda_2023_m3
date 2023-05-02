const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define("recipe", {
    recipe_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
  return recipe;
};
