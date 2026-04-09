// esto es una function expression
const sum = function (a, b) {
  return a + b
}
//hoisting -> permite llamar una funcion antes de ser declarada, no sirve si es una function expression
console.log(sum(10,2));
