const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app.js");
const DB = process.env.DATABASE;

const connectDB = async () => {
  try {
    mongoose.connect(DB).then(() => {
      console.log("Database connected SuccessFully !!");
    });
  } catch (error) {
    console.log("error");
    process.exit(1);
  }
};

let port = process.env.PORT || 3000;
// app.use((req, res, next) => {
//   console.log("sfdsfasdf");
//   next();
// });

connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening for requests");
  });
});
