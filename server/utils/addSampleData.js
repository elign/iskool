const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const Student = require("../model/student.model");
const Class = require("../model/class.model");
const Section = require("../model/section.model");
const Subject = require("../model/subject.model");
const Notice = require("../model/notice.model");
const Event = require("../model/event.model");
const sequelize = require("../config/database");
const moment = require("moment");
// Code for production testing
async function addSampleDataBulk() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });

    const users = [
      { userId: 1, email: "user1@example.com", role: "teacher" }, // User 1 (Teacher)
      { userId: 2, email: "user2@example.com", role: "admin" }, // User 2 (Admin)
      { userId: 3, email: "user3@example.com", role: "parent" }, // User 3 (Parent) - Student 1 & 4
      { userId: 4, email: "user4@example.com", role: "teacher" }, // User 4 (Teacher)
      { userId: 5, email: "user5@example.com", role: "parent" }, // User 5 (Parent) - Student 2 & 7
      { userId: 6, email: "user6@example.com", role: "parent" }, // User 6 (Parent) - Student 5 & 8
      { userId: 7, email: "user7@example.com", role: "teacher" }, // User 7 (Teacher)
      { userId: 8, email: "user8@example.com", role: "admin" }, // User 8 (Admin)
      { userId: 9, email: "user9@example.com", role: "parent" }, // User 9 (Parent) - Student 3 & 9
      { userId: 10, email: "user10@example.com", role: "teacher" }, // User 10 (Teacher)
      { userId: 11, email: "user11@example.com", role: "parent" }, // User 11 (Parent) - Student 6 & 10
      { userId: 12, email: "user12@example.com", role: "admin" }, // User 12 (Admin)
      { userId: 13, email: "user13@example.com", role: "parent" }, // User 13 (Parent) - Student 11 & 13
      { userId: 14, email: "user14@example.com", role: "teacher" }, // User 14 (Teacher)
      { userId: 15, email: "user15@example.com", role: "parent" }, // User 15 (Parent) - Student 12 & 14
    ];

    // Loop through users and create them with hashed passwords
    for (const user of users) {
      user.password = await bcrypt.hash("temp", 10); // Hash password before saving
      await User.create(user);
    }

    console.log("Sample users created successfully!");

    const classes = [];
    for (let i = 1; i <= 10; i++) {
      classes.push({ className: i.toString() }); // Convert number to string
    }

    await Class.bulkCreate(classes);
    console.log("Classes added successfully (bulk)!");

    const sections = [];
    for (const letter of ["A", "B", "C"]) {
      sections.push({ sectionName: letter });
    }

    await Section.bulkCreate(sections);
    console.log("Sections added successfully (bulk)!");

    // const classIds = [1, 2, 3];
    // const subjects = [
    //   { subjectName: "English" },
    //   { subjectName: "Hindi" },
    //   { subjectName: "Maths" },
    //   { subjectName: "Science" },
    //   { subjectName: "SST" },
    // ];

    // const subs = [];

    // // Loop through class IDs and section IDs
    // for (const classId of classIds) {
    //   // Loop through subjects to find the corresponding one
    //   for (const subject of subjects) {
    //     // Assuming a unique subject name, use it as the key for efficient lookup
    //     subs.push({
    //       subjectName: subject.subjectName,
    //       classId: classId,
    //       sectionId: 1,
    //     });
    //   }
    // }
    // Subject.bulkCreate(subs);
    // console.log("Sample subjects inserted successfully!");

    const students = [
      {
        userId: 3,
        classId: 1,
        sectionId: 1,
        rollNumber: 1,
        name: "Alice Smith",
        gender: "F",
        fatherName: "Michael Smith",
      }, // Parent 3 (User 3)
      {
        userId: 5,
        classId: 2,
        sectionId: 2,
        rollNumber: 2,
        name: "Bob Smith",
        gender: "M",
        fatherName: "Michael Smith",
      }, // Parent 5 (User 5)
      {
        userId: 9,
        classId: 3,
        sectionId: 3,
        rollNumber: 3,
        name: "Charlie Jones",
        gender: "M",
        fatherName: "David Jones",
      }, // Parent 9 (User 9)
      {
        userId: 3,
        classId: 1,
        sectionId: 1,
        rollNumber: 4,
        name: "Emily Johnson",
        gender: "F",
        fatherName: "William Johnson",
      }, // Parent 3 (User 3)
      {
        userId: null,
        classId: 2,
        sectionId: 2,
        rollNumber: 5,
        name: "Daniel Brown",
        gender: "M",
        fatherName: "Sarah Brown",
      }, // No Parent
      {
        userId: 6,
        classId: 3,
        sectionId: 3,
        rollNumber: 6,
        name: "Olivia Williams",
        gender: "F",
        fatherName: "Mark Williams",
      }, // Parent 6 (User 6)
      {
        userId: 5,
        classId: 1,
        sectionId: 1,
        rollNumber: 7,
        name: "David Miller",
        gender: "M",
        fatherName: "James Miller",
      }, // Parent 5 (User 5)
      {
        userId: 6,
        classId: 2,
        sectionId: 2,
        rollNumber: 8,
        name: "Sophia Garcia",
        gender: "F",
        fatherName: "Isabella Garcia",
      }, // Parent 6 (User 6)
      {
        userId: null,
        classId: 3,
        sectionId: 3,
        rollNumber: 9,
        name: "Noah Hernandez",
        gender: "M",
        fatherName: "Miguel Hernandez",
      }, // No Parent
      {
        userId: null,
        classId: 1,
        sectionId: 1,
        rollNumber: 10,
        name: "Mia Lopez",
        gender: "F",
        fatherName: "Antonio Lopez",
      }, // No Parent
      {
        userId: null,
        classId: 2,
        sectionId: 2,
        rollNumber: 11,
        name: "Lucas Lee",
        gender: "M",
        fatherName: "Chen Lee",
      }, // No Parent
      {
        userId: 11,
        classId: 3,
        sectionId: 3,
        rollNumber: 12,
        name: "Ava Jackson",
        gender: "F",
        fatherName: "Robert Jackson",
      }, // Parent 11 (User 11)
      {
        userId: null,
        classId: 1,
        sectionId: 1,
        rollNumber: 13,
        name: "Ethan Miller",
        gender: "M",
        fatherName: "David Miller",
      }, // No Parent
      {
        userId: 13,
        classId: 2,
        sectionId: 2,
        rollNumber: 14,
        name: "Isabella Garcia",
        gender: "F",
        fatherName: "Carlos Garcia",
      }, // Parent 13 (User 13)
      {
        userId: null,
        classId: 3,
        sectionId: 3,
        rollNumber: 15,
        name: "William Anderson",
        gender: "M",
        fatherName: "Thomas Anderson",
      }, // No Parent
      {
        userId: 15,
        classId: 1,
        sectionId: 1,
        rollNumber: 16,
        name: "Sophia Hernandez",
        gender: "F",
        fatherName: "Miguel Hernandez",
      }, // Parent 15 (User 15)
      {
        userId: null,
        classId: 2,
        sectionId: 2,
        rollNumber: 17,
        name: "Olivia Brown",
        gender: "F",
        fatherName: "David Brown",
      }, // No Parent
      {
        userId: null,
        classId: 3,
        sectionId: 3,
        rollNumber: 18,
        name: "Lucas Jones",
        gender: "M",
        fatherName: "Daniel Jones",
      }, // No Parent
      {
        userId: null,
        classId: 1,
        sectionId: 1,
        rollNumber: 19,
        name: "Charlotte Garcia",
        gender: "F",
        fatherName: "Carlos Garcia",
      }, // No Parent
    ];

    await Student.bulkCreate(students);

    const eventTypes = ["holiday", "festival", "competition", "exam"];
    const descriptions = [
      "Day to celebrate national independence.",
      "A cultural celebration with music, dance, and food.",
      "A test of skills and knowledge between participants.",
      "A formal evaluation to assess student learning.",
    ];
    const numEvents = 10;

    for (let i = 0; i < numEvents; i++) {
      // Generate random date within the current month
      const currentMonth = new Date().getMonth(); // 0-indexed month number
      const randomDay = Math.floor(Math.random() * 31) + 1; // Random day (1-31)
      const randomYear = Math.floor(Math.random() * (2025 - 2023 + 1)) + 2023; // Random year (2023-2024)

      // Select random event type and description
      const eventType =
        eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const description =
        descriptions[Math.floor(Math.random() * descriptions.length)];

      const sampleEvent = {
        date: new Date(randomYear, currentMonth, randomDay),
        eventName: `Sample Event ${i + 1}`,
        description: description,
        eventType: eventType,
      };

      await Event.create(sampleEvent);
    }
    console.log(`${numEvents} sample events created successfully!`);

    const numNotices = 10;
    const notices = [];

    for (let i = 0; i < numNotices; i++) {
      const notice = {
        date: moment().add(i, "days").toDate(),
        title: `Sample Notice Title ${i + 1}`,
        content: `This is the content of sample notice ${
          i + 1
        }. It contains some sample text to demonstrate the structure and format of a notice.`,
      };
      await Notice.create(notice);
    }

    console.log(`Successfully created ${numNotices} sample notices.`);

    console.log("Sample data inserted successfully (bulk)!");
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = addSampleDataBulk;
