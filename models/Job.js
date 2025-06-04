const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  type: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', JobSchema);
