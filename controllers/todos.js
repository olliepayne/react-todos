const Todo = require('../models/Todo')

module.exports = {
  index
}

function index(req, res) {
  Todo.find({})
  .then(todos => res.json(todos))
}