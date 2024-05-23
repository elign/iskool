// utils/createSampleSubjects.js
const Subject = require("../models/subject.model");

const createSampleSubjects = async () => {
  const subjects = [
    { subjectName: "Maths", classId: 1, sectionId: 1 },
    { subjectName: "Science", classId: 1, sectionId: 2 },
    { subjectName: "History", classId: 2, sectionId: 1 },
    { subjectName: "Geography", classId: 2, sectionId: 2 },
    { subjectName: "English", classId: 3, sectionId: 1 },
    { subjectName: "Physics", classId: 3, sectionId: 2 },
    { subjectName: "Chemistry", classId: 4, sectionId: 1 },
    { subjectName: "Biology", classId: 4, sectionId: 2 },
    { subjectName: "Art", classId: 5, sectionId: 1 },
    { subjectName: "Music", classId: 5, sectionId: 2 },
  ];

  try {
    await Subject.bulkCreate(subjects);
    console.log("Subjects added successfully!");
  } catch (error) {
    console.error("Error creating sample subjects:", error);
  }
};

module.exports = createSampleSubjects;
