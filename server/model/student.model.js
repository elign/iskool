const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const User = require("./user.model");
const Class = require("./class.model");
const Section = require("./section.model");
const Student = sequelize.define(
  "Students",
  {
    studentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Users",
        key: "userId",
      },
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Classes",
        key: "classId",
      },
    },
    sectionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Sections",
        key: "sectionId",
      },
    },
    rollNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      validate: {
        isIn: [["M", "F", "O"]], // Restrict gender to M, F or O
      },
    },
    fatherName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    // Use timestamps for automatic creation and update timestamps
    timestamps: true,
  }
);

// // // Define associations (Assuming models for User, Class, and Section exist)
// Student.belongsTo(User, { foreignKey: "userId", as: "user" });
Student.belongsTo(Class, { foreignKey: "classId", as: "class" });
Student.belongsTo(Section, { foreignKey: "sectionId", as: "section" });

module.exports = Student;
