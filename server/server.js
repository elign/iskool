const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./config/database");
require("dotenv").config();

const port = process.env.PORT || 4000;
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());

(async () => {
  try {
    await db.sync(); // Synchronize database models (create/update tables)
    console.log("Database connection successful!");

    // Start your application server
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
})();

app.listen(port, () => console.log(`Iskool Backend listening on port ${port}`));
