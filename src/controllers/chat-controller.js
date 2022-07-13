const Chat = require("../models/chats-schema");

const getAllChat = async (req, res, next) => {
  try {
    const chats = await Chat.find();

    res.status(200).json({
      status: "success",
      result: chats,
    });
  } catch (error) {
    next(error);
  }
};

const createChat = async (req, res, next) => {
  try {
    const chat = await Chat.create(req.body);

    res.status(201).json({
      status: "success",
      result: chat,
    });
  } catch (error) {
    next(error);
  }
};
const getChatById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const chat = await Chat.findById(id);

    res.status(200).json({
      status: "success",
      result: chat,
    });
  } catch (error) {
    next(error);
  }
};
const updateChatById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const chat = await Chat.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      chat,
    });
  } catch (error) {
    next(error);
  }
};

const deleteChatById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const chat = await Chat.findByIdAndDelete(id);

    res.status(204).json({
      status: "success",
      result: null,
    });
  } catch (error) {
    next(error);
  }
};

const setUserChatId = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;

  next();
};

module.exports = {
  getAllChat,
  createChat,
  getChatById,
  updateChatById,
  deleteChatById,
  setUserChatId,
};
