import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Size = sequelize.define("size", {
    size_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
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
