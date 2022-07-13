const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = require("./app");

dotenv.config();

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => console.log("Database connection succesfull!"));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
