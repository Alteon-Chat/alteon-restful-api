const Account = require("../models/accounts-schema");

const getAllAccount = async (req, res, next) => {
  try {
    const accounts = await Account.find();

    res.status(200).json({
      status: "success",
      result: accounts,
    });
  } catch (error) {
    next(error);
  }
};

const createAccount = async (req, res, next) => {
  try {
    const account = await Account.create(req.body);

    // req.body.password = undefined;

    res.status(201).json({
      status: "success",
      result: account,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getAccountById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const account = await Account.findById(id);

    res.status(200).json({
      status: "success",
      result: account,
    });
  } catch (error) {
    next(error);
  }
};
const updateAccountById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const account = await Account.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      account,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAccountById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const account = await Account.findByIdAndDelete(id);

    res.status(204).json({
      status: "success",
      account,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAccount,
  createAccount,
  getAccountById,
  updateAccountById,
  deleteAccountById,
};
