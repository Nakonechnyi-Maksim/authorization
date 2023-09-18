const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  email: { type: DataTypes.STRING, unique: true, required: true },
  password: { type: DataTypes.STRING, required: true },
  isActivated: { type: DataTypes.BOOLEAN, default: false },
  activationLink: { type: DataTypes.STRING },
});

module.exports = User;
