const express = require("express");
const route = express.Router();
const { User } = require("../models/user");

route
  .get("/", async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.status(400).json({
        status: "ok",
      });
    }
  })
  .post("/", async (req, res) => {
    try {
      const { name, gender, friends, description } = req.body;
      const user = new User({ name, gender, friends, description });
      await user.save();
      res.status(200).json(user);
    } catch (err) {
      const errors = err.errors;
      const keys = Object.keys(errors);
      const errObj = {};
      keys.forEach((key) => {
        errObj[key] = errors[key].message;
      });
      res.status(400).json({
        success: false,
        err: errObj,
      });
    }
  })
  .delete("/delete/:id", async (req, res) => {
    try {
      const id = req.params;
      await User.findOneAndRemove(id);
      res.json({
        status: "ok",
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
      });
    }
  })
  .patch("/update/:id", async (req, res) => {
    try {
      const { name, gender, friends, description } = req.body;
      const id = req.params;
      const user = await User.findOne(id);
      user.name = name;
      user.gender = gender;
      user.friends = friends;
      user.description = description;
      await user.save();
      res.status(200).json({
        status: true,
        object: user,
      });
    } catch (error) {
      const errors = error.errors;
      const keys = Object.keys(errors);
      const errObj = {};
      keys.forEach((key) => {
        errObj[key] = errors[key].message;
      });
      res.status(400).json({
        status: "false",
        error: errObj,
      });
    }
  });

module.exports = route;
