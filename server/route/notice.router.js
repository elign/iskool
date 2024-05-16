const express = require("express");
const router = express.Router();
const {
  createNotice,
  getAllNotices,
  getNoticesFromTodayToNext7Days,
  updateNotice,
  deleteNotice,
} = require("../controller/notice.controller");
const {
  authenticateTeacherAdminToken,
} = require("../middleware/authenticateTeacherAdmin");

const { authenticateToken } = require("../middleware/authenticateToken");
// Create a new notice
router.post("/", authenticateTeacherAdminToken, createNotice);

// Get all notices
router.get("/", authenticateToken, getAllNotices);

// Get notices from today to the next 7 days
router.get("/upcoming", authenticateToken, getNoticesFromTodayToNext7Days);

// Update a notice by ID
router.put("/:id", authenticateTeacherAdminToken, updateNotice);

// Delete a notice by ID
router.delete("/:id", authenticateTeacherAdminToken, deleteNotice);

module.exports = router;
