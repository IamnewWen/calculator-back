const ROUND = 5

exports.add = (v1, v2) => v1 + v2
exports.subtract = (v1, v2) => v1 - v2
exports.multiply = (v1, v2) => v1 * v2
exports.divide = (v1, v2) => Number((v1 / v2).toFixed(ROUND))
exports.formula = (value) => {
  formattedFormula = test(value)
  result = formulaOperator(formattedFormula)

  return result
}

// const formulaFormatter = (formula) => {
//   formattedFormula = formula.replace(/\s/g, '').split('') //remove all whitespace using Regex, and split into array
//   return formattedFormula
// }

const formulaOperator = (formattedFormula) => {
  return formattedFormula
}

const test = (formula) => {
  let result = []
  let addPart = []
  let subtractPart = []

  formattedFormula = formula.replace(/\s/g, '')
  if (formattedFormula.includes('+')) {
    result = formattedFormula.split('+')
  }

  result.forEach((element, index) => {
    if (element.includes('-')) {
      let part = element.split('-')
      part.forEach((element, index) => {
        if (index === 0) {
          addPart.push(element)
        }
        subtractPart.push(element)
      })
    } else {
      addPart.push(element)
    }
  })

  console.log(addPart)
  console.log(subtractPart)

  multiplyAndDivide(subtractPart)

  return result
}

const multiplyAndDivide = (part) => {
  let result = []
  let op = []

  part.forEach((element) => {
    if (element.includes('*')) {
      op = element.split('*')
    }
    console.log(op)
  })
}