import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const ClientDessert = sequelize.define("client_dessert");
  return ClientDessert;
};