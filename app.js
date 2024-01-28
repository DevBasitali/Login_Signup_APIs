const express = require("express");

const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set("view engine", "ejs");

// Database Connection
const DB_URI = "mongodb://localhost:27017/User_auth";
mongoose
  .connect(DB_URI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
