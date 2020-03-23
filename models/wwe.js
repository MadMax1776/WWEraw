const mongoose = require('mongoose');


const wweSchema = new mongoose.Schema({
  title: String,
  link: String
});

const Wwe = mongoose.model('Wwe', wweSchema);

module.exports = Wwe;
