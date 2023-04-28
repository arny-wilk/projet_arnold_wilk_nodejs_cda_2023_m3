import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Size = sequelize.define("size", {
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });
  return Size;
};
