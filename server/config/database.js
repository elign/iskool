const Sequelize = require("sequelize");

module.exports = new Sequelize({
  dialect: "mysql",
  database: "your_database_name",
  username: "your_username",
  password: "your_password",
  host: "localhost", // or your database host
  define: {
    timestamps: true, // Enable timestamps for all models (optional)
  },
});
