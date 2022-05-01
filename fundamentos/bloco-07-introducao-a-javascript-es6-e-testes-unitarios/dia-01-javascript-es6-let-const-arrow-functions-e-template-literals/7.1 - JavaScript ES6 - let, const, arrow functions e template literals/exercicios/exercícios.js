// Parte I

/*
Agora você vai fazer alguns exercícios de fixação.
🚀 Se liga nesse foguete!

Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

Modifique a estrutura da função para que ela seja uma arrow function .

Modifique as concatenações para template literals .
*/

// function testingScope(escopo) { // comeco do escopo da funcao

//   if (escopo === true) { // comeco do espo do if

//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';

//     console.log(ifScope);

//   } // fim do escopo do if

//     else { // comeco do escopo do else

//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';

//     console.log(elseScope);

//   } fim do escopo do else

//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.

// } // fim do escopo da funcao

// testingScope(true);

// const testingScope = (escopo) => {
//   let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//   let elseScope = 'Não devo ser utilizada fora meu escopo (else)';

//   console.log(
//     escopo === true
//       ? (ifScope = `${ifScope} ótimo, fui utilizada no escopo!`)
//       : (ifScope = `${elseScope} o que estou fazendo aqui ? :O')`)
//   );
// };

// testingScope(true);

/* 🚀 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b);
console.log(
  `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
);

oddsAndEvens.sort((a, b) => b - a);
console.log(
  `Os números ${oddsAndEvens} se encontram ordenados de forma decrescente!`
);
