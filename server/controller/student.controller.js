const Student = require("../model/student.model");

const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating student" });
  }
};

const getStudent = async (req, res) => {
  try {
    const { studentId } = req.params; // Assuming student ID is in the URL params
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching student" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const [updatedCount] = await Student.update(req.body, {
      where: { studentId },
    });
    if (updatedCount === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    const updatedStudent = await Student.findByPk(studentId);
    res.json(updatedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating student" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const deletedCount = await Student.destroy({
      where: { studentId },
    });
    if (deletedCount === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(204).json(); // No content needed in response body
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting student" });
  }
};

module.exports = {
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
