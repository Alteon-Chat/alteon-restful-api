const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { promisify } = require("util");

const Account = require("../models/accounts-schema");
const User = require("../models/users-schema");

const createToken = (user) => {
  return (token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_DATE,
  }));
};

const signup = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const account = await Account.create({ email, password });
    const user = await User.create({ name, account: account._id });

    const token = createToken(account);

    res.status(201).json({
      status: "success",
      token,
      result: user,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const account = await Account.findOne({ email }).select("+password");

    const validatePassword = await bcrypt.compare(password, account.password);
    if (!account || !validatePassword) {
      return res.status(404).json({
        status: "error",
        message: "incorrect account",
      });
    }

    const token = createToken(account);

    const user = await User.findOne({ email });

    res.status(201).json({
      status: "success",
      token,
      result: user,
    });
  } catch (error) {
    next(error);
  }
};

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(404).json({
        status: "error",
        message: "incorrect token",
      });
    }
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET_KEY
    );
    const user = await User.findOne({ account: decoded.id });

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login, protect };
