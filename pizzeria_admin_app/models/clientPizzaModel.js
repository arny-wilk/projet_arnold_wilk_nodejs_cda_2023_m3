import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const ClientPizza = sequelize.define("client_pizza");
  return ClientPizza;
};