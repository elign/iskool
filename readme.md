# Project Name

Skool - App that simplifies the interaction between teachers and parents.

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Daily Updates](#daily-updates)
    - [Notifications](#notifications)
    - [Academic Progress](#academic-progress)
  - [Database structure](#database-structure)
    - [User:](#user)
    - [Student:](#student)
    - [Class:](#class)
    - [Section:](#section)
    - [Subject:](#subject)
    - [Daily\_Work:](#daily_work)
    - [Monthly\_Planner:](#monthly_planner)
    - [NoticeBoard:](#noticeboard)
    - [TestResults:](#testresults)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Features

As per the review from the teacher there would be following features in the app:

- Daily Updates
- Notifications
- Academic Progress

Refer to this UI link for more info: [App Prototype](https://www.figma.com/proto/4ZUWXlcEtev9MJL6o4wgIL/iskool?type=design&node-id=8-170&t=OwCOQ5ATQwecXijR-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A170&mode=design "Iskool app UI")

### Daily Updates

3 sub-sections:
- Class work
- Home work
- Language

### Notifications

3 sub-sections:
- Monthly Calendar
- Circular & Notices
- Club Activity Details

### Academic Progress

3 sub-sections:
- Class test reports.
- Exam Results

## Database structure

### User:

Columns:
user_id (INT PRIMARY KEY): Unique identifier for the user (parent)
username (VARCHAR(255)): Username for login
password (VARCHAR(255)): Hashed password for security (store only the hash)
role: [Teacher, Admin, Parent]
(Add other relevant user information like name, email, etc.)

### Student:
 Columns:
student_id (INT PRIMARY KEY): Unique identifier for the student (child)
user_id (INT FOREIGN KEY REFERENCES User(user_id)): User (parent) the student belongs to (references User table)
class_id (INT FOREIGN KEY REFERENCES Class(class_id)): Class the student belongs to (references Class table)
section_id (INT FOREIGN KEY REFERENCES Section(section_id)): Section the student belongs to (references Section table)
roll_number (INT): Student's roll number within the section
name (VARCHAR(255)): Student's name
gender (CHAR(1)): Student's gender (M/F/O)
father_name (VARCHAR(255)): Father's name

- The Student table now has a user_id foreign key referencing the User table. This establishes the one-to-many relationship between a user and their children (students).

### Class:

Columns:
class_id (INT PRIMARY KEY): Unique identifier for the class
class_name (VARCHAR(255)): Name of the class (e.g., 6th Grade A)

### Section:

Columns:
section_id (INT PRIMARY KEY): Unique identifier for the section
section_name (VARCHAR(255)): Name of the section (e.g., A/B)

### Subject:

Columns:
subject_id (INT PRIMARY KEY): Unique identifier for the subject
subject_name (VARCHAR(255)): Name of the subject (e.g., Math)
class_id (INT FOREIGN KEY REFERENCES Class(class_id)): Class the subject belongs to (references Class table)
section_id (INT FOREIGN KEY REFERENCES Section(section_id)): Section the subject belongs to (references Section table)

### Daily_Work:

Columns:
daily_work_id (INT PRIMARY KEY): Unique identifier for the daily work entry
subject_id (INT FOREIGN KEY REFERENCES Subject(subject_id)): Subject the work belongs to (references Subject table)
date (DATE): Date the work was assigned
homework_details (TEXT): Details of the homework assigned
classwork_details (TEXT): Details of the classwork conducted

### Monthly_Planner:

Columns:
event_id (INT PRIMARY KEY): Unique identifier for the event
month (INT): Month of the event (1-12)
year (INT): Year of the event
date (DATE): Date of the event
event_name (VARCHAR(255)): Name of the event
description (TEXT): Additional details about the event

### NoticeBoard:

Columns:
notice_id (INT PRIMARY KEY): Unique identifier for the notice
date (DATE): Date the notice was posted
title (VARCHAR(255)): Title of the notice
content (TEXT): Content of the notice

### TestResults:

Columns:
test_id (INT PRIMARY KEY): Unique identifier for the test
subject_id (INT FOREIGN KEY REFERENCES Subject(subject_id)): Subject for which the test was conducted (references Subject table)
student_id (INT FOREIGN KEY REFERENCES Student(student_id)): Student who took the test (references Student table)
date (DATE): Date the test was conducted
marks (INT): Marks obtained by the student in the test

## Installation

Instructions for installing the project locally or for any dependencies required.

## Usage

Instructions for using the project, including examples and code snippets if applicable.

## Contributing

Guidelines for contributing to the project, including information about how to report bugs, suggest enhancements, or submit pull requests.

## License

Information about the project's license. Include the license name and a link to the full license text if applicable.
