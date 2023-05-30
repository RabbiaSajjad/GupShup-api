const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: {
    type: String
  },
  attachments: {
    type: String
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  recipients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  messageStatus: {
    type: String
  },
  sentAt: {
    type: Timestamp
  }


});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
