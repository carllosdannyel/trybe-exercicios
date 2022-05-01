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

// const calculadora = (op, n1, n2) => `o cálculo da ${op} entre ${n1} e ${n2} é: ${operacao(op, n1, n2)}`

// const operacao = (op, n1, n2) => op === 'soma' ? `${n1 + n2}` : op === 'subtracao' ? `${n1 - n2}` : op === 'divisao' ? `${n1 / n2}` : op === 'multiplicacao' ? `${n1 * n2}` : 0

// console.log(calculadora('soma', 9, 3))
// console.log(calculadora('subtracao', 9, 3))
// console.log(calculadora('divisao', 9, 3))
// console.log(calculadora('multiplicacao', 9, 3))

// if (true) {
//   // inicio do escopo do if
//   var userAge = '20';
//   console.log(userAge); // 20
//   // fim do escopo do if
// }
// console.log(userAge); // 20

// if (true) {
//
//   let userAge = '20';
//   console.log(userAge);
//
// }

// console.log(userAge); nao permite acessar a variavel userAge por ser uma let, onde let nao permite vazar o escopo;

// useAge is not defined

// if (true) {
//   // inicio do escopo do if
//   const userAge = '20';
//   console.log(userAge); // 20
//   // fim do escopo do if
// }
// console.log(userAge); // 20

// // useAge is not defined

// console.log(userAge); nao permite acessar a variavel userAge por ser uma const, onde const nao permite vazar o escopo;

// const favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
// console.log(favoriteLanguage);

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology);

// const userInfo = {
//   name: 'Carlos',
//   id: '2412-5',
//   email: 'carlosdanielpereirasantos18@gmail.com',
// };

// userInfo.name = 'Daniel';

// console.log(userInfo); // { name: 'Daniel', id: '2412-5', email: 'carlosdanielpereirasantos18@gmail.com' }

// const technologies = ['Javascript', 'CSS', 'HTML'];
// // technologies.push('React');
// // console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro

// const myName = 'Carlos Daniel J. Pereira dos Santos'
// const age = 22
// // console.log('meu nome é: ' + myName + ' e tenho 22 anos');
// console.log(`ola\n, meu nome é ${myName}\n e tenho ${age} anos`)

// const myName = function() {
//   const myName = 'Carlos Daniel';
//   return myName;
// }
// console.log(myName());

// const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
// console.log(objetoPessoa('carlos', 22))

// const calculadora = (n1, op, n2) =>
//   `o valor da sua operação entre ${n1} ${op} ${n2} é: ${resultado(n1, op, n2)}`;
// const resultado = (n1, op, n2) =>
//   op === '+'
//     ? n1 + n2
//     : op === '-'
//     ? n1 - n2
//     : op === '*'
//     ? n1 * n2
//     : op === '/'
//     ? n1 / n2
//     : 0;

// OBS: usar operadores ternarios aninhados nao é uma boa pratica !!!

// console.log(calculadora(10, '+', 10)); // o valor da sua operação entre 10 + 10 é: 20
// console.log(calculadora(20, '-', 5)); // o valor da sua operação entre 20 - 5 é: 15
// console.log(calculadora(10, '*', 10)); // o valor da sua operação entre 10 * 10 é: 100
// console.log(calculadora(10, '/', 10)); // o valor da sua operação entre 10 / 10 é: 1

// // A sintaxe básica do operador ternário é muito simples:
// `expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// // Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
// const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
// console.log(trueExpression); // isso é verdade

// const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
// console.log(falseExpression); // isso é mentira

// const filtroPermissao = (idade) => {
//   if (idade < 18) {
//     return 'Infelizmente você não tem permissão';
//   } else {
//     return 'Opa, pode entrar';
//   }
// };

// console.log(filtroPermissao(17));
// console.log(filtroPermissao(18));

// Usando arrow funciton

// const filtroDePermissao = (age) =>
//   age < 18 ? `Infelizmente você não tem permissão para dirigir` : `Você está liberado para dirigir`;

// console.log(filtroDePermissao(17));
// console.log(filtroDePermissao(18));

