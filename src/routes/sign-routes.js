const express = require("express");
const { signup, login } = require("../controllers/authentication-controller");

const signRouter = express.Router();

signRouter.route("/up").post(signup);
signRouter.route("/in").post(login);

module.exports = signRouter;
