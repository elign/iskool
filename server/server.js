const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./route/userRouter");
const studentRouter = require("./route/student.router");
const eventRouter = require("./route/event.router");
const noticeRouter = require("./route/notice.router");
const cors = require("cors");
const addSampleDataBulk = require("./utils/addSampleData");
const connectToDb = require("./utils/connectToDb");
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

// Use this code in production to connect to the database
// connectToDb();
// Use this code while testing to create sample data in db
addSampleDataBulk();

app.listen(port, () => console.log(`Iskool Backend listening on port ${port}`));
app.use("/", userRouter);
app.use("/students", studentRouter);
app.use("/events", eventRouter);
app.use("/notices", noticeRouter);
