const arguments = process.argv.slice(2);
const piNumber = 3.14;
console.log(arguments[0])

function calculateAreaOfCircle(radius) {
  let area = piNumber * (radius ** 2)
  let result = `Yaricapi ${radius} olan dairenin alani : ${area}`
  return result;
}

console.log(calculateAreaOfCircle(arguments[0]));