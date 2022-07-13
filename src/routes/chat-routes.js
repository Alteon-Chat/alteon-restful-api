const express = require("express");
const { protect } = require("../controllers/authentication-controller");
const {
  createChat,
  getAllChat,
  getChatById,
  updateChatById,
  deleteChatById,
  setUserChatId,
} = require("../controllers/chat-controller");

const chatRouter = express.Router();

chatRouter.route("/").post(protect, setUserChatId, createChat).get(getAllChat);
chatRouter;
chatRouter
  .route("/:id")
  .get(getChatById)
  .patch(updateChatById)
  .delete(deleteChatById);

module.exports = chatRouter;
