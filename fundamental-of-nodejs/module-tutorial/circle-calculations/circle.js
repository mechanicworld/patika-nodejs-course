const circleArea = (r) => {
  return (3.14 * (r ** 2)).toFixed(2)
}

const circleCircumference = (r) => {
  return (2 * 3.14 * r).toFixed(2)
}


module.exports = {
  circleArea,
  circleCircumference
}
