// todo: handle null condition

class Calculator {
  constructor(ROUND) {
    this.ROUND = ROUND
    this.history = []
  }

  setRound(newRound) {
    if (newRound !== null && newRound >= 0 && Number.isInteger(newRound)) { // check if newRound is not null, is integer, and is greater than zero
      this.ROUND = newRound
      return true // return succeeded signal
    }
    return false // return failed signal
  }

  saveHistory(v1, v2, operator, answer) {
    let record = {}

    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
      record.formula = `${v1} ${operator} ${v2}`
      record.answer = answer
      this.history.push(record) // record formula and answer
    } else {
      record.formula = operator
      record.answer = answer
      this.history.push(record)
    }
  }

  getHistory() {
    return this.history
  }

  add(v1, v2) {
    const answer = v1 + v2

    this.saveHistory(v1, v2, '+', answer)

    return answer
  }

  subtract(v1, v2) {
    const answer = v1 - v2

    this.saveHistory(v1, v2, '-', answer)

    return answer
  }

  multiply(v1, v2) {
    const answer = v1 * v2

    this.saveHistory(v1, v2, '*', answer)

    return answer
  }

  divide(v1, v2) {
    const answer = Number((v1 / v2).toFixed(this.ROUND))

    this.saveHistory(v1, v2, '/', answer)

    return answer
  }

  formula(value) {
    const formattedFormula = this.formulaFormatter(value)
    const answer = this.formulaOperator(formattedFormula)

    this.saveHistory(null, null, formattedFormula, answer)

    return answer
  }

  formulaFormatter(formula) {
    let formattedFormula = formula.replace(/\s/g, '') // remove all whitespace using Regex
    return formattedFormula
  }

  formulaOperator(formattedFormula) {
    let formulaParts = [] // each part of formula
    let addParts = []
    let subtractParts = []
    let resultOfAddParts = []
    let resultOfSubtractParts = []
    let result = 0

    if (formattedFormula.includes('+')) {
      formulaParts = formattedFormula.split('+') // if containing '+', split
    } else {
      formulaParts.push(formattedFormula)
    }

    formulaParts.forEach((element) => { // deal with un-splitted elements, i.e. elements containing '-'
      if (element.includes('-')) {
        let parts = element.split('-') // get every part splitted from element
        parts.forEach((element, index) => {
          if (index === 0) { // after splitted, first part is positive, i.e. to add
            addParts.push(element)
          } else { // the rest parts to be subtracted from
            subtractParts.push(element)
          }
        })
      } else {
        addParts.push(element)
      }
    })

    // proceed multiply and divide parts
    resultOfAddParts = this.multiplyAndDivide(addParts)
    resultOfSubtractParts = this.multiplyAndDivide(subtractParts)

    resultOfAddParts.forEach((element) => {
      result += element
    })

    resultOfSubtractParts.forEach((element) => {
      result -= element
    })

    return result
  }

  multiplyAndDivide(part) {
    let resultArray = []
    let resultOfOperation = 1 // initial result of operation

    part.forEach((element) => {
      let multiplyParts = []
      let divideParts = []

      if (element.includes('*')) { // if element contains multiply part
        multiplyParts = element.split('*')
        multiplyParts.forEach((element) => {
          if (element.includes('/')) {
            divideParts = element.split('/')
            divideParts.forEach((element, index) => {
              if (index === 0) {
                resultOfOperation *= Number(element)
              } else {
                resultOfOperation /= Number(element)
              }
            })
          } else {
            resultOfOperation *= Number(element)
          }
        })
      } else { // if element contains only divide part
        divideParts = element.split('/')
        divideParts.forEach((element, index) => {
          if (index === 0) {
            resultOfOperation *= Number(element)
          } else {
            resultOfOperation /= Number(element)
          }
        })
      }
      resultArray.push(Number(resultOfOperation.toFixed(this.ROUND)))
      resultOfOperation = 1 // reset resultOfOperation for the next element calculation
    })

    return resultArray
  }
}

const calculator = new Calculator(5) // new calculator in the class and export, so that we can use the same calculator in any other file

export default calculator