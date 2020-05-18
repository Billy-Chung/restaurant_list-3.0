const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
// 引用路由器
const routes = require('./routes')


// 載入 method-override
const methodOverride = require('method-override')

require('./config/mongoose')


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'), bodyParser.urlencoded({ extended: true }), methodOverride('_method'), routes)




//設置伺服器的監聽器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

