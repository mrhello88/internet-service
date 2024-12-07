const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,  // In a real project, hash the password
  role: { type: String, default: 'admin' }
});

module.exports = mongoose.model('Admin', adminSchema);