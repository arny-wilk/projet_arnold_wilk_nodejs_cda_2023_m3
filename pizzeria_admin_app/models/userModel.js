import { DataTypes } from "sequelize";

// user Model
export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true, // Vérification du format d'email
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return User;
};
