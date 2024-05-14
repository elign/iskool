const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./route/userRouter");
const studentRouter = require("./route/student.router");
const cors = require("cors");
const sequelize = require("./config/database");
require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("./model/user.model");
const Student = require("./model/student.model");
const Class = require("./model/class.model");
const Section = require("./model/section.model");

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
(async () => {
  try {
    await sequelize.sync(); // Synchronize database models (create/update tables)
    console.log("Database connection successful!");

    // Start your application server
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
})();

// Code for production testing
// async function insertSampleDataBulk() {
//   try {
//     await sequelize.authenticate();
//     await sequelize.sync({ force: true });

//     const users = [
//       { userId: 1, email: "user1@example.com", role: "teacher" }, // User 1 (Teacher)
//       { userId: 2, email: "user2@example.com", role: "admin" }, // User 2 (Admin)
//       { userId: 3, email: "user3@example.com", role: "parent" }, // User 3 (Parent) - Student 1 & 4
//       { userId: 4, email: "user4@example.com", role: "teacher" }, // User 4 (Teacher)
//       { userId: 5, email: "user5@example.com", role: "parent" }, // User 5 (Parent) - Student 2 & 7
//       { userId: 6, email: "user6@example.com", role: "parent" }, // User 6 (Parent) - Student 5 & 8
//       { userId: 7, email: "user7@example.com", role: "teacher" }, // User 7 (Teacher)
//       { userId: 8, email: "user8@example.com", role: "admin" }, // User 8 (Admin)
//       { userId: 9, email: "user9@example.com", role: "parent" }, // User 9 (Parent) - Student 3 & 9
//       { userId: 10, email: "user10@example.com", role: "teacher" }, // User 10 (Teacher)
//       { userId: 11, email: "user11@example.com", role: "parent" }, // User 11 (Parent) - Student 6 & 10
//       { userId: 12, email: "user12@example.com", role: "admin" }, // User 12 (Admin)
//       { userId: 13, email: "user13@example.com", role: "parent" }, // User 13 (Parent) - Student 11 & 13
//       { userId: 14, email: "user14@example.com", role: "teacher" }, // User 14 (Teacher)
//       { userId: 15, email: "user15@example.com", role: "parent" }, // User 15 (Parent) - Student 12 & 14
//     ];

//     // Loop through users and create them with hashed passwords
//     for (const user of users) {
//       user.password = await bcrypt.hash("temp", 10); // Hash password before saving
//       await User.create(user);
//     }

//     console.log("Sample users created successfully!");

//     const classes = [];
//     for (let i = 1; i <= 10; i++) {
//       classes.push({ className: i.toString() }); // Convert number to string
//     }

//     await Class.bulkCreate(classes);
//     console.log("Classes added successfully (bulk)!");

//     const sections = [];
//     for (const letter of ["A", "B", "C"]) {
//       sections.push({ sectionName: letter });
//     }

//     await Section.bulkCreate(sections);
//     console.log("Sections added successfully (bulk)!");

//     const students = [
//       {
//         userId: 3,
//         classId: 1,
//         sectionId: 1,
//         rollNumber: 1,
//         name: "Alice Smith",
//         gender: "F",
//         fatherName: "Michael Smith",
//       }, // Parent 3 (User 3)
//       {
//         userId: 5,
//         classId: 2,
//         sectionId: 2,
//         rollNumber: 2,
//         name: "Bob Smith",
//         gender: "M",
//         fatherName: "Michael Smith",
//       }, // Parent 5 (User 5)
//       {
//         userId: 9,
//         classId: 3,
//         sectionId: 3,
//         rollNumber: 3,
//         name: "Charlie Jones",
//         gender: "M",
//         fatherName: "David Jones",
//       }, // Parent 9 (User 9)
//       {
//         userId: 3,
//         classId: 1,
//         sectionId: 1,
//         rollNumber: 4,
//         name: "Emily Johnson",
//         gender: "F",
//         fatherName: "William Johnson",
//       }, // Parent 3 (User 3)
//       {
//         userId: null,
//         classId: 2,
//         sectionId: 2,
//         rollNumber: 5,
//         name: "Daniel Brown",
//         gender: "M",
//         fatherName: "Sarah Brown",
//       }, // No Parent
//       {
//         userId: 6,
//         classId: 3,
//         sectionId: 3,
//         rollNumber: 6,
//         name: "Olivia Williams",
//         gender: "F",
//         fatherName: "Mark Williams",
//       }, // Parent 6 (User 6)
//       {
//         userId: 5,
//         classId: 1,
//         sectionId: 1,
//         rollNumber: 7,
//         name: "David Miller",
//         gender: "M",
//         fatherName: "James Miller",
//       }, // Parent 5 (User 5)
//       {
//         userId: 6,
//         classId: 2,
//         sectionId: 2,
//         rollNumber: 8,
//         name: "Sophia Garcia",
//         gender: "F",
//         fatherName: "Isabella Garcia",
//       }, // Parent 6 (User 6)
//       {
//         userId: null,
//         classId: 3,
//         sectionId: 3,
//         rollNumber: 9,
//         name: "Noah Hernandez",
//         gender: "M",
//         fatherName: "Miguel Hernandez",
//       }, // No Parent
//       {
//         userId: null,
//         classId: 1,
//         sectionId: 1,
//         rollNumber: 10,
//         name: "Mia Lopez",
//         gender: "F",
//         fatherName: "Antonio Lopez",
//       }, // No Parent
//       {
//         userId: null,
//         classId: 2,
//         sectionId: 2,
//         rollNumber: 11,
//         name: "Lucas Lee",
//         gender: "M",
//         fatherName: "Chen Lee",
//       }, // No Parent
//       {
//         userId: 11,
//         classId: 3,
//         sectionId: 3,
//         rollNumber: 12,
//         name: "Ava Jackson",
//         gender: "F",
//         fatherName: "Robert Jackson",
//       }, // Parent 11 (User 11)
//       {
//         userId: null,
//         classId: 1,
//         sectionId: 1,
//         rollNumber: 13,
//         name: "Ethan Miller",
//         gender: "M",
//         fatherName: "David Miller",
//       }, // No Parent
//       {
//         userId: 13,
//         classId: 2,
//         sectionId: 2,
//         rollNumber: 14,
//         name: "Isabella Garcia",
//         gender: "F",
//         fatherName: "Carlos Garcia",
//       }, // Parent 13 (User 13)
//       {
//         userId: null,
//         classId: 3,
//         sectionId: 3,
//         rollNumber: 15,
//         name: "William Anderson",
//         gender: "M",
//         fatherName: "Thomas Anderson",
//       }, // No Parent
//       {
//         userId: 15,
//         classId: 1,
//         sectionId: 1,
//         rollNumber: 16,
//         name: "Sophia Hernandez",
//         gender: "F",
//         fatherName: "Miguel Hernandez",
//       }, // Parent 15 (User 15)
//       {
//         userId: null,
//         classId: 2,
//         sectionId: 2,
//         rollNumber: 17,
//         name: "Olivia Brown",
//         gender: "F",
//         fatherName: "David Brown",
//       }, // No Parent
//       {
//         userId: null,
//         classId: 3,
//         sectionId: 3,
//         rollNumber: 18,
//         name: "Lucas Jones",
//         gender: "M",
//         fatherName: "Daniel Jones",
//       }, // No Parent
//       {
//         userId: null,
//         classId: 1,
//         sectionId: 1,
//         rollNumber: 19,
//         name: "Charlotte Garcia",
//         gender: "F",
//         fatherName: "Carlos Garcia",
//       }, // No Parent
//     ];

//     await Student.bulkCreate(students);
//     console.log("Sample students inserted successfully (bulk)!");
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// // Call the function to insert sample data (bulk)
// insertSampleDataBulk();

app.listen(port, () => console.log(`Iskool Backend listening on port ${port}`));
app.use("/", userRouter);
app.use("/students", studentRouter);
