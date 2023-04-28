import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Drinks = sequelize.define("drinks", {
    drink_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    drink_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });
  return Drinks;
};
