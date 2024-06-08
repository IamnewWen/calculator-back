import { Router } from 'express'

// calculator 路由器，引用 calculatorRouter路由設定檔
import calculatorRouter from './calculatorRouter.js'

const router = Router()

// 使用路由設定，設定基礎（前綴）路由 /calculator為路由名稱
router.use('/calculator', calculatorRouter)

export default router