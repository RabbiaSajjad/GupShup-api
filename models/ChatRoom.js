const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
  roomName: {
    type: String
  },
  createdAt: {
    type: Timestamp,
    required: true
  },
  updatedAt: {
    type: Timestamp,
    required: true
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;
