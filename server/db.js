const { Sequelize } = require("sequelize");

module.exports = new Sequelize("node_reg_user", "postgres", "root", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
});
