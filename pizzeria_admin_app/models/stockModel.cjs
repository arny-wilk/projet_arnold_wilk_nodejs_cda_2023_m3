const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define( "stock", {
    stock_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
});
  return Stock;
};
