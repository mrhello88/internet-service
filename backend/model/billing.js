const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  customerId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  invoiceDate: { type: Date, default: Date.now },
  status: { type: String, default: 'unpaid' } // unpaid, paid
});

module.exports = mongoose.model('Billing', billingSchema);