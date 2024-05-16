const Notice = require("../model/notice.model");
const moment = require("moment");
const { Op } = require("sequelize");

const createNotice = async (req, res) => {
  try {
    const { date, title, content } = req.body;
    const newNotice = await Notice.create({ date, title, content });
    res.status(201).json(newNotice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.findAll({
      order: [["date", "DESC"]], // Sort by date (descending)
    });
    res.status(200).json(notices);
  } catch (error) {
    console.error("Error fetching notices:", error);
    res.status(500).json({ message: "Error fetching notices" }); // Internal Server Error (500)
  }
};

// Get notices from today to the next 7 days
const getNoticesFromTodayToNext7Days = async (req, res) => {
  try {
    const today = moment().startOf("day").toDate();
    const nextWeek = moment().add(7, "days").endOf("day").toDate();

    const notices = await Notice.findAll({
      where: {
        date: {
          [Op.between]: [today, nextWeek],
        },
      },
    });

    res.status(200).json(notices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, title, content } = req.body;
    const [updated] = await Notice.update(
      { date, title, content },
      {
        where: { noticeId: id },
      }
    );
    if (updated) {
      const updatedNotice = await Notice.findByPk(id);
      res.status(200).json(updatedNotice);
    } else {
      res.status(404).json({ message: "Notice not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteNotice = async (req, res) => {
  const { id } = req.params;

  try {
    const notice = await Notice.findByPk(id);
    if (!notice) {
      return res.status(404).json({ message: "Notice not found" }); // Not Found (404)
    }

    await notice.destroy();
    res.status(204).json(); // No Content (204) - successful deletion with no data to return
  } catch (error) {
    console.error("Error deleting notice:", error);
    res.status(500).json({ message: "Error deleting notice" }); // Internal Server Error (500)
  }
};

module.exports = {
  createNotice,
  getAllNotices,
  getNoticesFromTodayToNext7Days,
  updateNotice,
  deleteNotice,
};
