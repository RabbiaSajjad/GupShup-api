const mongoose = require ("mongoose")
const usersModel = require("../models/User");
const User = require("../models/User");


//user/Create new user
exports.createUser = async (userDetails) => {
  try {
    const user = new User({
      username: userDetails.username,
      email: userDetails.email,
      password : userDetails.password,
      profilePicture : userDetails.profilePicture
    });
    /** add user details to user object above and create object in mongodb, return required result */

    // await create call
    await user.save();
    return user;
  } catch (err) {
    console.log("Error", err.message);
  }
};

//user/Get all users
exports.getAllUsers = async () => {
  try {
    /** Fetch and return all users here */
    return User.find({});
  } catch (err) {
    console.log("Error", err.message);
  }
};
