const express = require("express");
const userController = require("../controllers/user.controller");

const userRouter = express.Router();
//POST/Create new user
userRouter.post("/", userController.createUser);

//GET/Get all users
userRouter.get("/", userController.getAllUsers);

module.exports = userRouter;
