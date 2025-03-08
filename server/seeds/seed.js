// Import required packages
const sequelize = require("../config/connection");

const bcrypt = require("bcrypt");

// import models
const { Course, Category, User, EnrolledUser } = require("../models");

// import seed data
const coursesData = require("./courses.json");

const usersData = require("./users.json");

const categoriesData = require("./categories.json");

// Seed database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate(categoriesData);

  // Hash the password for each user
  for (const user of usersData) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  const users = await User.bulkCreate(usersData);

  for (const course of coursesData) {
    course.categoryId =
      categories[Math.floor(Math.random() * categories.length)].id;
    course.created_by = users[Math.floor(Math.random() * users.length)].id;

    await Course.create(course);

    // pick random number of users to enroll in the course
    const usersToEnroll = Math.floor(Math.random() * users.length);

    const potentialUsers = [...users];

    for (let i = 0; i < usersToEnroll; i++) {
      const user =
        potentialUsers[Math.floor(Math.random() * potentialUsers.length)];

      // remove user from potential users so it can't be enrolled again
      potentialUsers.splice(potentialUsers.indexOf(user), 1);

      await EnrolledUser.create({
        userId: user.id,
        courseId: course.id,
        enrollment_date: new Date(),
      });
    }
  }

  process.exit(0);
};

// Call seedDatabase function
seedDatabase();
