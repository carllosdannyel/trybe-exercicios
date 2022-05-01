// Parte II

// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// const fatorial = (numero) => {
//   let resultado = 1;
//   for (let i = numero; i >= 1; i -= 1) {
//     resultado *= i;
//   }
//   return resultado;
// };
// console.log(fatorial(4));
// // Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// const fatorial2 = (numero) => (numero > 1 ? numero * fatorial2(numero - 1) : 1);
// console.log(fatorial2(4));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:

// maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// const maiorPalavra = (texto) => {
//   let array = texto.split(' ');
//   let maiorTamanho = 0;
//   let resultado = '';

//   for (const palavra of array) {
//     if (palavra.length > maiorTamanho) {
//       maiorTamanho = palavra.length;
//       resultado = palavra;
//     }
//   }

//   return resultado;
// };

// console.log(
//   maiorPalavra(
//     'Antonio foi no banheiro e não sabemos o que aconteceu'
//   )
// );

// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
