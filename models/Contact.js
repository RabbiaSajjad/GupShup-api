const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  relationshipStatus: {
    type: String
  }

});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
