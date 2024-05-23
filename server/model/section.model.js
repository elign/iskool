const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Section = sequelize.define(
  "Sections",
  {
    sectionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sectionName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = Section;
