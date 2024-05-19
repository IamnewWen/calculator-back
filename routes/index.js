const express = require('express')

// calculator 路由器，引用 calculatorRouter路由設定檔
const calculatorRouter = require('./calculatorRouter')

const router = express.Router()

// 使用路由設定，設定基礎（前綴）路由 /calculator為路由名稱
router.use('/calculator', calculatorRouter)

module.exports = router