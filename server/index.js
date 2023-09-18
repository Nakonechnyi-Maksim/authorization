require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");
const { error } = require("console");
const sequelize = require("./db");
const cookieParser = require("cookie-parser");
const router = require("./router/index");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("К бд подруб имеется");
    app.listen(PORT, () => console.log(`Сервер на этом порте: ${PORT}`));
  } catch (e) {
    console.log("Ашибочка", e);
  }
};

start();
