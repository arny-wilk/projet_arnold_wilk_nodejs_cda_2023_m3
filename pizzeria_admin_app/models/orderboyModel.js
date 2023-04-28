import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const OrderBoy = sequelize.define("orderboy", {
    orderboy_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
  });
  return OrderBoy;
};
