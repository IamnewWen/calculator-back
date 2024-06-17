import { Router } from 'express'
import calculator from '../service/Calculator.js'
const router = Router()


router.get('/', (req, res) => {
  res.status(200).send('This is a calculator')
})

router.patch('/set_round', (req, res) => { // usually use underline or hyphen to combine words as route name
  const QUERY = req.query
  const newRound = Number(QUERY.newRound)
  //檢查
  const response = calculator.setRound(newRound)
  res.json({
    setRound: response
  })
})

router.get('/get_history', (req, res) => {
  const response = calculator.getHistory()
  res.json({
    History: response // can also use '...response' to directly expand response into json
  })
})

router.get('/add', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = calculator.add(v1, v2) // don't put answer directly in the json, so that we can add checkpoint if needed
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