const User = require("../models/users-schema");

const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      users,
    });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    next(error);
  }
};
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    next(error);
  }
};
const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    res.status(204).json({
      status: "success",
      user,
    });
  } catch (error) {
    next(error);
  }
};
const getCurrentUser = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

module.exports = {
  getAllUser,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getCurrentUser,
};
