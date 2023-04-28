import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  const Command = sequelize.define(
    "command",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      numeroCommand: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return Command;
};
