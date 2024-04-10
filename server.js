const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app.js");
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log("Database connected SuccessFully !!");
});

let port = process.env.PORT;
// app.use((req, res, next) => {
//   console.log("sfdsfasdf");
//   next();
// });

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
