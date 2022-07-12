const express = require("express");

const createUser = require("../controllers/user-controller");

const userRouter = express.Router();

userRouter.route("/").post(createUser);

module.exports = userRouter;