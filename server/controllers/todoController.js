const { model } = require('mongoose');
const models = require('../models/todoModels');

const todoController = {};

todoController.getItems = (req, res, next) => {
  const item = models.Items;
  item.find({}, (err, items) => {
    if (err) {
      next({
        log: 'Controller error handler caught on getItems middleware',
        message: { err: 'An error occurred on getItems middleware' },
      });
    }
    res.locals.items = items;
    next();
  });
};

todoController.addItem = (req, res, next) => {
  const { item } = req.body;
  const todo = models.Items;
  todo.create({ item, item }, (err, person) => {
    if (err) {
      next({
        log: 'Controller error handler caught on addItem middleware',
        message: { err: 'An error occurred' },
      });
    }
    next();
  });
};

module.exports = todoListController;
