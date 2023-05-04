module.exports = (sequelize, DataTypes) => {
  const OrderBoyOrderPref = sequelize.define("ordboPref", {
    orderboy_op_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status_delivery: {
      type: DataTypes.STRING,
      defaultValue: "ENREGISTRE"
}
  });
  return OrderBoyOrderPref;
};
