const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));

// const wweController = require('./controllers/wwe.js');
// app.use('/wwe', wweController);

mongoose.connect('mongodb://localhost:27017/meancrud',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongod...');
});











app.listen(3000, () => {
  console.log('Hello World');
});
