const Event = require("../model/event.model");
const moment = require('moment');
const { Op } = require('sequelize');

const createEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent); // Created (201) status with the created event data
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Error creating event" }); // Internal Server Error (500)
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Error fetching events" }); // Internal Server Error (500)
  }
};

const getEventsForCurrentMonth = async (req, res) => {
  try {
    const startOfMonth = moment().startOf("month").toDate();
    const endOfMonth = moment().endOf("month").toDate();

    const events = await Event.findAll({
      where: {
        date: {
          [Op.between]: [startOfMonth, endOfMonth],
        },
      },
    });

    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const eventUpdates = req.body;

  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" }); // Not Found (404)
    }

    await event.update(eventUpdates);
    res.json(event);
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: "Error updating event" }); // Internal Server Error (500)
  }
};

const deleteEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" }); // Not Found (404)
    }

    await event.destroy(); // Destroy the event record

    res.status(204).json(); // No Content (204) - successful deletion with no data to return
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Error deleting event" }); // Internal Server Error (500)
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventsForCurrentMonth,
  updateEvent,
  deleteEvent,
};
