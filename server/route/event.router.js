const express = require("express");
const eventController = require("../controller/event.controller"); // Assuming controllers are in a './controllers' folder
const {
  authenticateTeacherAdminToken,
} = require("../middleware/authenticateTeacherAdmin");

const { authenticateToken } = require("../middleware/authenticateToken");
const router = express.Router();

// Create event route
router.post("/", authenticateTeacherAdminToken, eventController.createEvent);

// Read all events route
router.get("/", authenticateToken, eventController.getAllEvents);

// Read events for current month route
router.get(
  "/current",
  authenticateToken,
  eventController.getEventsForCurrentMonth
);

// Update event route
router.put(
  "/:eventId",
  authenticateTeacherAdminToken,
  eventController.updateEvent
);

// Delete event route
router.delete(
  "/:eventId",
  authenticateTeacherAdminToken,
  eventController.deleteEvent
);

module.exports = router;
