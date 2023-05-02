module.exports = (sequelize, DataTypes) => {
  const ClientOrderPref = sequelize.define("client_order_preferences", {
    client_op: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
  return ClientOrderPref;
};
