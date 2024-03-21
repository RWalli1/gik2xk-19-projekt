const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

// Define and export the users model
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [2, 100],
        },
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [2, 100],
        },
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [4, 200],
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [8, 100],
        },
      },
    },
    { underscored: true }
  );
};
