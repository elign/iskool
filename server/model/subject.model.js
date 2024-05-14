const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Subject = sequelize.define("Subject", {
  subjectId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subjectName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Class",
      key: "classId",
    },
  },
  sectionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Section",
      key: "sectionId",
    },
  },
});

Subject.belongsTo(Class, { foreignKey: 'classId' });
Subject.belongsTo(Section, { foreignKey: 'sectionId' });

module.exports = Section;
