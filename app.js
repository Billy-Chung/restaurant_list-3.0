const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const mongoose = require('mongoose') // 載入 mongoose
const Todo = require('./models/todo') // 載入 Todo model
const bodyParser = require('body-parser')
// 引用路由器
const routes = require('./routes')

// 載入 method-override
const methodOverride = require('method-override')
// 設定連線到 mongoDB
mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true, useUnifiedTopology: true }) 

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'), bodyParser.urlencoded({ extended: true }), methodOverride('_method'), routes)




//設置伺服器的監聽器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

