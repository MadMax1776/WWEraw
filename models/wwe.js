const mongoose = require('mongoose');


const wweSchema = new mongoose.Schema({
  title: String,
  wweLink: String
});

const Wwe = mongoose.model('Wwe', wweSchema);

module.exports = Wwe;
