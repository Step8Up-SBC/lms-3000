const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class EnrolledUser extends Model {}

EnrolledUser.init(
  {
    enrollment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "enrolled_user",
  }
);

// Export Course model
module.exports = EnrolledUser;
