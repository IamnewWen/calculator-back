const ROUND = 5

exports.add = (v1, v2) => v1 + v2
exports.subtract = (v1, v2) => v1 - v2
exports.multiply = (v1, v2) => v1 * v2
exports.divide = (v1, v2) => Number((v1 / v2).toFixed(ROUND))