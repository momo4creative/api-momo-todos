const express = require("express");
const { getTodos, addTodo } = require("../controllers/todos");

const router = express.Router();

router.route("/").get(getTodos).post(addTodo);

router.route("/:id").get().put().delete();

module.exports = router;
