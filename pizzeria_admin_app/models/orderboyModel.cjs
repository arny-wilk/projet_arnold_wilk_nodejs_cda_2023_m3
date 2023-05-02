const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const orderBoy = sequelize.define(
    "orderboy",
    {
      orderboy_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstname_boy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname_boy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mail_boy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vehicule: {
        type: DataTypes.STRING,
        allowNull: true,
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
  return orderBoy;
};
