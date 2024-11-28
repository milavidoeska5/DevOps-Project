const mongoose = require('mongoose');

const GroceryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1},
  category: { type: String, required: true},
  purchased: { type: Boolean, default: false }
});

module.exports = mongoose.model('GroceryItem', GroceryItemSchema);
