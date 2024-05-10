const Sequelize = require("sequelize");

module.exports = new Sequelize({
  dialect: "mysql",
  database: process.env.DB_NAME,
  username: 'iskool',
  password: 'pass',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  define: {
    timestamps: true,
  },
});
