const express = require('express')
const router = express.Router()
const Todo = require('../../models/todo')

//搜尋功能的路由
router.get('/', (req, res) => {
    const keyword = req.query.keyword
    return Todo.find()
      .lean()
      .then(todos => {
        const results = todos.filter(
          item =>
            item.name.toLowerCase().includes(keyword.toLowerCase()) ||
            item.category.toLowerCase().includes(keyword.toLowerCase())
        )
        if (results.length > 0) {
          res.render('index', { todos: results, keyword: keyword })
        } else {
          res.render('index', { keyword: keyword })
        }
      })
      .catch(error => console.log(error))
  })

module.exports = router