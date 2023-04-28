import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const CreditCard = sequelize.define("credit_card", {
    cc_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    cc_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return CreditCard;
};
