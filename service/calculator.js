// todo: handle null condition

class calculator {
  constructor(ROUND) {
    this.ROUND = ROUND
  }

  add(v1, v2) {
    return v1 + v2
  }

  subtract(v1, v2) {
    return v1 - v2
  }

  multiply(v1, v2) {
    return v1 * v2
  }

  divide(v1, v2) {
    return Number((v1 / v2).toFixed(this.ROUND))
  }

  formula(value) {
    const formattedFormula = this.formulaFormatter(value)
    const result = this.formulaOperator(formattedFormula)

    return result
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

export default calculator