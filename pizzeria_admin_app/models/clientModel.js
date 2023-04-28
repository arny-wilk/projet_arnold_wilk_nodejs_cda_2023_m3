import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Client = sequelize.define("client", {
    client_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Client;
};
