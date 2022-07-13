const ClientError = require("../exceptions/ClientError");

const validationDBHandler = (err) => {
  const message = `Invalid input data for ${err.path}: ${err.message}`;
  return new ClientError(message);
};

const errorController = (err, req, res, next) => {
  // let error = { ...err };

  // if (err.name === "ValidationError")
  //   error = validationDBHandler(error.errors.name.properties);

  // if (error instanceof ClientError) {
  //   res.status(error.statusCode).json({
  //     status: error.name,
  //     message: error.message,
  //   });
  // } else {
  //   console.log("error bro");
  // }
  res.status(400).json({
    status: "error",
    message: err,
  });
};

module.exports = errorController;
