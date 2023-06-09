const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();

router.get('/', todoController.getItems, (req, res) =>
  res.status(200).json(res.locals.items)
);

router.post('/item', todoController.addItem, (req, res) =>
  res.status(200).json({})
);

module.exports = router;
