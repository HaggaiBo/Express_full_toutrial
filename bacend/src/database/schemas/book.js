const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  author: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  genre: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  supply: {
    type: mongoose.SchemaTypes.Number,
    required: true,
    default: new Date(),
  },
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    required: true,
    default: new Date(),
  },
})

module.exports = mongoose.model('books', bookSchema);