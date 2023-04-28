import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const ClientDrinks = sequelize.define("client_drinks");
  return ClientDrinks;
};