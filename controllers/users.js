const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const User = require("../models/User");
const Role = require("../models/Role");

// GET
const getUsers = async (req, res) => {
  try {
    //
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// ADD
const addUser = async (req, res) => {
  try {
    //
    throw Error("Gagal membuat akun baru !");
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User(req.body);
    const user = await newUser.save();
    if (!user) throw Error("Gagal membuat akun baru !");

    res.status(200).json(user);
    //
  } catch (err) {
    console.log("addUser ->", err);
    res.status(400).json(err.message);
  }
};

// UPDATE

// DELETE

// LOGIN
const loginUser = async (req, res) => {
  try {
    //
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// export
module.exports = { getUsers, addUser, loginUser };
