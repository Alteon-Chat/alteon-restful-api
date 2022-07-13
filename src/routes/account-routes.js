const express = require("express");
const {
  getAllAccount,
  createAccount,
  getAccountById,
  updateAccountById,
  deleteAccountById,
} = require("../controllers/account-controller");

const accountRoutes = express.Router();

accountRoutes.route("/").post(createAccount).get(getAllAccount);

accountRoutes
  .route("/:id")
  .get(getAccountById)
  .patch(updateAccountById)
  .delete(deleteAccountById);

module.exports = accountRoutes;
