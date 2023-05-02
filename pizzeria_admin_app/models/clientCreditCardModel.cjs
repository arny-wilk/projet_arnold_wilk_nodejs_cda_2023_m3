const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const clientCreditCard = sequelize.define("client_credit_card", {
    client_cc: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
  return clientCreditCard;
};
