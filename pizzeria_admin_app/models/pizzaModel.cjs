const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const pizza = sequelize.define(
    "pizza",
    {
      pizza_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      pizza_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
        field: "createdAt",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
        field: "updatedAt",
      },
    },
    { timestamps: true }
  );
  return pizza;
};
