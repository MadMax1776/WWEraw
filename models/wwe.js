const mongoose = require('mongoose');


const wweSchema = new mongoose.Schema({
  title: String,
  website: String
});

const Wwe = mongoose.model('Wwe', wweSchema);

module.exports = Wwe;
