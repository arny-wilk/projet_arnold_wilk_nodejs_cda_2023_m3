import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const OrderBoy = sequelize.define("orderBoy", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    firstNameBoy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastNameBoy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mailBoy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicule: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return OrderBoy;
};
