module.exports = (sequelize, DataTypes) => {
  const pizza = sequelize.define("pizza", {
    pizza_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pizza_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  return pizza;
};
