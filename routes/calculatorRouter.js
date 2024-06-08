import { Router } from 'express'
import Calculator from '../service/calculator.js'
const router = Router()
const calculator = new Calculator(5)

router.get('/', (req, res) => {
  res.status(200).send('This is a calculator')
})

router.get('/add', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = calculator.add(v1, v2) // 不要直接把 answer放進 json，放在前一層有需要的話可以添加檢查功能
  res.json({
    answer: answer
  })
})

router.get('/subtract', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = calculator.subtract(v1, v2)
  res.json({
    answer: answer
  })
})

router.get('/multiply', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = calculator.multiply(v1, v2)
  res.json({
    answer: answer
  })
})

router.get('/divide', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = calculator.divide(v1, v2)
  res.json({
    answer: answer
  })
})

router.get('/formula', (req, res) => {
  const QUERY = req.query
  const value = QUERY.value
  const answer = calculator.formula(value)
  res.json({
    answer: answer
  })
})

export default router