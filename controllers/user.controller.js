const { useReducer } = require("react");
const userService = require("../services/user.service");

//POST/Create new user
exports.createUser = async (req, res) => {
  // if (error) return res.status(400); //return 400 if input is incorrect
  try {
    console.log(req.body);
    const user = await userService.createUser(req.body);
    res.send(user);
  } catch (err) {
    res.status(400).send(err.message); //return 400 bad request
  }
};


//GET/ Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    console.log(users);
    res.send(users);
  } catch (err) {
    res.status(400).send(err.message); //return 400 bad request
  }
};
