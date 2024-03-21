// Make the necessary imports
const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

// Define and export the cart model
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "cart",
    {
      payed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { underscored: true }
  );
};
