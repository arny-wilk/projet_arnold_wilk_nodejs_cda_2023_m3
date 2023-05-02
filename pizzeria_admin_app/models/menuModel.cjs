const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define("menu", {
    menu_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
  return menu;
};
