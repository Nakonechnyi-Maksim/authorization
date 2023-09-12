require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");
const { error } = require("console");

const PORT = process.env.PORT;
const app = express();

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Сервер на этом порте: ${PORT}`));
  } catch (e) {
    console.log("Ашибочка");
  }
};

start();
