
const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

// Define and export the cartRows model
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "cartRow",
    {
      amount: {
        type: DataTypes.DOUBLE,
      },
    },
    { underscored: true }
  );
};
