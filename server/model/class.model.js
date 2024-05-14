const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Class = sequelize.define(
  "Classes",
  {
    classId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    className: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    // Use timestamps for automatic creation and update timestamps
    timestamps: true,
  }
);

module.exports = Class;
