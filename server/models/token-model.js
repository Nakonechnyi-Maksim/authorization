const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const token = sequelize.define("token", {
  user: {
    type: DataTypes.STRING,
    // references: {
    //   model: "User",
    // },
  },
  refreshToken: { type: DataTypes.STRING, required: true },
});

module.exports = token;
