const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

// Define and export the ratings model
module.exports = (sequelize) => {
  return sequelize.define(
    "rating",
    {
      rating: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          min: 0,
          max: 5,
        },
      },
    },
    { underscored: true }
  );
};
