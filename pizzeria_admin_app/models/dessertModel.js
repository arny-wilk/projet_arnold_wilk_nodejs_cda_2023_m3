import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Dessert = sequelize.define("dessert", {
    dessert_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    dessert_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });
  return Dessert;
};
