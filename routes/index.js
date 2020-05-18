// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入模組程式碼
const todos = require('./modules/todos')
const search = require('./modules/search')
const home = require('./modules/home')


router.use('/', home)

router.use('/todos', todos)

router.use('/search', search)

// 匯出路由器
module.exports = router