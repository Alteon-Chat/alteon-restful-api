const express = require("express");
const {
  createChat,
  getAllChat,
  getChatById,
  updateChatById,
  deleteChatById,
} = require("../controllers/chat-controller");

const chatRouter = express.Router();

chatRouter.route("/").post(createChat).get(getAllChat);
chatRouter;
chatRouter
  .route("/:id")
  .get(getChatById)
  .patch(updateChatById)
  .delete(deleteChatById);

module.exports = chatRouter;
