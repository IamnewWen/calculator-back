const express = require('express')
const router = express.Router()
const { add, subtract, multiply, divide, formula } = require('../service/operate')

router.get('/', (req, res) => {
  res.status(200).send('This is a calculator')
})

router.get('/add', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = add(v1, v2) // 不要直接把 answer放進 json，放在前一層有需要的話可以添加檢查功能
  res.json({
    answer: answer
  })
})

router.get('/subtract', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = subtract(v1, v2)
  res.json({
    answer: answer
  })
})

router.get('/multiply', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = multiply(v1, v2)
  res.json({
    answer: answer
  })
})

router.get('/divide', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = divide(v1, v2)
  res.json({
    answer: answer
  })
})

router.get('/formula', (req, res) => {
  const QUERY = req.query
  const value = QUERY.value

  console.log(value)

  const answer = formula(value)
  res.json({
    answer: answer
  })
})

module.exports = router