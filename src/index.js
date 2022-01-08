const express = require("express");
const app = express();
const { connectDB, connectDB2 } = require("./db/config");
const { mid } = require("./middleware/auth");
const userRouter = require("./router/user");
connectDB2();
app.use(express.json());
app.use("/user", userRouter);
module.exports = app;
