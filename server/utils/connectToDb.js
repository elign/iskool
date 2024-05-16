const sequelize = require("../config/database");

async function connectToDb() {
  try {
    await sequelize.sync(); // Synchronize database models (create/update tables)
    console.log("Database connection successful!");

    // Start your application server
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
}

module.exports = connectToDb;