const express = require("express");
const cors = require("cors");

const errorController = require("./controllers/error-controller");
const accountRoutes = require("./routes/account-routes");
const chatRouter = require("./routes/chat-routes");
const signRouter = require("./routes/sign-routes");
const userRouter = require("./routes/user-routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/sign", signRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/chats", chatRouter);
app.use("/api/v1/accounts", accountRoutes);

app.all("*", (req, res, next) => {
  return res.status(404).json({
    status: "fail",
    message: `Cant find ${req.originalUrl}`,
  });
});

app.use(errorController);

module.exports = app;
