const express = require('express')
const router = express.Router()

const ROUND = 5

router.get('/', (req, res) => {
  res.status(200).send('This is a calculator')
})

router.get('/plus', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  res.json({
    answer: v1 + v2
  })
})

router.get('/minus', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  res.json({
    answer: v1 - v2
  })
})

router.get('/multiply', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  res.json({
    answer: v1 * v2
  })
})

router.get('/divide', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  res.json({
    answer: Number((v1 / v2).toFixed(ROUND))
  })
})

module.exports = router