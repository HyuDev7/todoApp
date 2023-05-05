require("dotenv").config();
// console.log(require("dotenv").config())
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport);

// get driver connection
const dbo = require("./db/conn");
// const passport = require("passport");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
