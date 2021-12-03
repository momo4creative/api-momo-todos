const express = require("express");
const { generateToken, verifyToken } = require("../middlewares/authenticate");
const { addUser, loginUser } = require("../controllers/users");

const route = express.Router();

// GET
route.get("/", verifyToken, (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// POST REGISTER
route.post("/register", addUser);

// POST LOGIN
route.post("/login", loginUser);

module.exports = route;
