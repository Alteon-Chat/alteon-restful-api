const express = require("express");
const {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/user-controller");

const userRouter = express.Router();

userRouter.route("/").post(createUser).get(getAllUser);

userRouter
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = userRouter;
