// 引用後端框架 express
import express from 'express'
import cors from 'cors'

// 路由們，底下可以包含多個路由器設定，這邊引用路由設定檔，使用 ES6 module設定後必須指定完整檔案路徑及副檔名，不能單純指定目錄
//（先前使用 CommonJS語法 import沒有指定檔案路徑預設就是./router/index.js）
import routes from './routes/index.js'

// 建立 express 實例
const app = express()

// 設置監聽的 port (後端 URL 會是 localhost:[PORT])
const PORT = 3000

// 使用 cors 中間件，允許不同網域來的請求，免於同源策略的限制
app.use(cors())

// 使用路由設定
app.use(routes)

app.listen(PORT, () => {
  console.log(`express server is running on http://localhost:${PORT}/calculator`)
})