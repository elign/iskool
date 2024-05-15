const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Event = sequelize.define("Events", {
  event_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  eventName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true, // Optional description
  },
  eventType: {
    type: DataTypes.ENUM("holiday", "festival", "competition", "exam"),
    allowNull: false,
  },
});
module.exports = Event;
