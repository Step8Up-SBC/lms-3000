// import all models
const Course = require("./course");
const Category = require("./category");
const User = require("./user");
const EnrolledUser = require("./enrolled_user");

Course.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Category.hasMany(Course, {
  foreignKey: "categoryId",
  as: "courses",
});

User.belongsToMany(Course, {
  through: EnrolledUser,
  foreignKey: "userId",
});

Course.belongsToMany(User, {
  through: EnrolledUser,
  foreignKey: "courseId",
});

module.exports = {
  Course,
  Category,
  User,
  EnrolledUser,
};
