const User = require("../models/users-schema");

const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = createUser;
