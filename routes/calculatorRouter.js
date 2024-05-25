const express = require('express')
const router = express.Router()
const { add, subtract, multiply, divide } = require('../service/operate')

router.get('/', (req, res) => {
  res.status(200).send('This is a calculator')
})

router.get('/add', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  res.json({
    answer: add(v1, v2)
  })
})

router.get('/subtract', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  res.json({
    answer: subtract(v1, v2)
  })
})

router.get('/multiply', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  res.json({
    answer: multiply(v1, v2)
  })
})

router.get('/divide', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  res.json({
    answer: divide(v1, v2)
  })
})

module.exports = router