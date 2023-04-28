import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const ClientOrderPref = sequelize.define("client_order_preferences");
  return ClientOrderPref;
};