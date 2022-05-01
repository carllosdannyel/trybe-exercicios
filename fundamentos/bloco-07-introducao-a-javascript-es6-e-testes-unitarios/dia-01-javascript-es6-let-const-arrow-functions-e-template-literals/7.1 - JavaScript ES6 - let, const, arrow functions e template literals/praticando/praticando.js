// const calculadora = (op, n1, n2) => {
//   return ('o cálculo da operação é: ' + operacao(op, n1, n2))
// };

// function operacao(op, n1, n2) {
//   if (op === 'soma') {
//     return n1 + n2
//   } else if (op === 'subtração') {
//     return n1 - n2
//   }
// };

// console.log(calculadora('soma', 9, 3))
// console.log(calculadora('subtração', 9, 3))



const calculadora = (op, n1, n2) => `o cálculo da ${op} entre ${n1} e ${n2} é: ${operacao(op, n1, n2)}`

const operacao = (op, n1, n2) => op === 'soma' ? `${n1 + n2}` : op === 'subtracao' ? `${n1 - n2}` : op === 'divisao' ? `${n1 / n2}` : op === 'multiplicacao' ? `${n1 * n2}` : 0

console.log(calculadora('soma', 9, 3))
console.log(calculadora('subtracao', 9, 3))
console.log(calculadora('divisao', 9, 3))
console.log(calculadora('multiplicacao', 9, 3))