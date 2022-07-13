const express = require("express");
const { protect } = require("../controllers/authentication-controller");
const {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getCurrentUser,
} = require("../controllers/user-controller");

const userRouter = express.Router();

userRouter.route("/profile").get(protect, getCurrentUser, getUserById);

userRouter.route("/").post(createUser).get(getAllUser);

userRouter
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = userRouter;
