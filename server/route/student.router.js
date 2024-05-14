/*
We need routes for the following tasks:
1. Create student
2. Read the information of a student.
3. Update a the student info.
4. Delete a student from the DB.
*/
const express = require("express");
const studentController = require("../controller/student.controller"); // Assuming controllers are in a './controllers' folder
const {
  authenticateTeacherAdminToken,
} = require("../middleware/authenticateTeacherAdmin");

const { authenticateToken } = require("../middleware/authenticateToken");
const router = express.Router();

// Create student route
router.post(
  "/",
  authenticateTeacherAdminToken,
  studentController.createStudent
);

// Read student information route
router.get("/:studentId", authenticateToken, studentController.getStudent);

// Update student information route
router.put(
  "/:studentId",
  authenticateTeacherAdminToken,
  studentController.updateStudent
);

// Delete student route
router.delete(
  "/:studentId",
  authenticateTeacherAdminToken,
  studentController.deleteStudent
);

module.exports = router;
