// 引用後端框架 express
const express = require('express')
const cors = require('cors')

// 引用路由設定檔
const calculatorRoutes = require('./routes')

// 建立 express 實例
const app = express()

// 設置監聽的 port (後端 URL 會是 localhost:[PORT])
const PORT = 3000

// 使用 cors 中間件，允許不同網域來的請求，免於同源策略的限制
app.use(cors())

// 使用路由設定
app.use(calculatorRoutes)

app.listen(PORT, () => {
  console.log(`express server is running on http://localhost:${PORT}/calculator`)
})