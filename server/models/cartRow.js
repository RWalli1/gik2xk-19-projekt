const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'cartRow',
      {
        amount: {
          type: DataTypes.DOUBLE
        }
      },
      { underscored: true }
    );
  };