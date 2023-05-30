const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password : {
    type: String,
    required: true
  },
  profilePicture : {
    type: String
  },
  status : {
    type: Boolean
  },
  contacts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
