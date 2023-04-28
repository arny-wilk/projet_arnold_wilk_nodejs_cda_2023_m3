import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const ClientCreditCard = sequelize.define("client_credit_card");
  return ClientCreditCard;
};