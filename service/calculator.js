// todo: handle null condition

class Calculator {
  constructor(ROUND) {
    this.ROUND = ROUND
    this.history = []
  }

  setRound(newRound) {
    if (newRound !== null && newRound >= 0 && Number.isInteger(newRound)) { // 檢查設置的精確度是否不為空，為整數且大於等於0
      this.ROUND = newRound
      return true
    }
    return false
  }

  getHistory() {
    return this.history
  }

  add(v1, v2) {
    let record = {}
    const answer = v1 + v2

    record.formula = `${v1} + ${v2}`
    record.answer = answer
    this.history.push(record)

    return answer
  }

  subtract(v1, v2) {
    let record = {}
    const answer = v1 - v2

    record.formula = `${v1} - ${v2}`
    record.answer = answer
    this.history.push(record)

    return answer
  }

  multiply(v1, v2) {
    let record = {}
    const answer = v1 * v2

    record.formula = `${v1} * ${v2}`
    record.answer = answer
    this.history.push(record)

    return answer
  }

  divide(v1, v2) {
    let record = {}
    const answer = Number((v1 / v2).toFixed(this.ROUND))

    record.formula = `${v1} / ${v2}`
    record.answer = answer
    this.history.push(record)

    return answer
  }

  formula(value) {
    let record = {}
    const formattedFormula = this.formulaFormatter(value)
    const answer = this.formulaOperator(formattedFormula)

    record.formula = value
    record.answer = answer
    this.history.push(record)

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

const calculator = new Calculator(5)

export default calculator