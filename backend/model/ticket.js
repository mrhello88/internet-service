const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  customerId: mongoose.Schema.Types.ObjectId,
  issue: String,
  status: { type: String, default: 'open' }, // open, in-progress, resolved
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);