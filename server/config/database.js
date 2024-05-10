const Sequelize = require("sequelize");

module.exports = new Sequelize({
  dialect: "mysql",
  database: "iskool",
  username: 'iskool',
  password: 'pass',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  define: {
    timestamps: true,
  },
});
