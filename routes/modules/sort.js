const express = require('express')
const router = express.Router()
const Todo = require('../../models/todo')

//Sort function
router.get('/:name/:type', (req, res) => {
  const { name, type } = req.params
  return Todo.find()
    .sort({ [name]: [type] })
    .lean()
    .then(todos => res.render('index', { todos }))
    .catch(error => console.log(error))
})

module.exports = router