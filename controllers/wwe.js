const express = require('express');
const router = express.Router();

const Wwe = require('../models/wwe.js');

router.post('/', (req, res) => {
  Wwe.create(req.body, (err, createdWwe) => {
    res.json(createdWwe);
  });
});

router.get('/', (req, res) => {
  Wwe.find({}, (err, foundWwe) => {
    res.json(foundWwe);
  });
});

router.delete('/:id', (req, res) => {
  Wwe.findByIdAndRemove(req.params.id, (err, deletedWwe) => {
    res.json(deletedWwe);
  });
});

router.put('/:id', (req, res) => {
  Wwe.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedWwe)=>{
        res.json(updatedWwe);
    });
});

module.exports = router;
