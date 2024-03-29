
const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

// Define and export the products model
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "product",
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [2, 100],
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
