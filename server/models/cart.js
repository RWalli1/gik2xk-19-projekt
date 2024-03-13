const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

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
