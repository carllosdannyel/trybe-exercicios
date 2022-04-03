// ----- PARTE 1: FUNÇÕES -----

// Crie uma função que exibe uma saudação matinal.

function morningGreeting() {
    return 'Bom dia!';
}

console.log(morningGreeting());


// Crie uma função que que recebe como parâmetros dois inteiros e retorna a soma dos dois.


function sum(number1, number2) {
    return number1 + number2;
}

console.log(sum(5, 3));
console.log(sum(5, 5));
console.log(sum(2, 3));


// Crie uma função que que recebe dois números inteiros e retorna o menor valor entre eles.

function lessThan(number1, number2) {
    if (number1 < number2) {
        return number1;
    }
        return number2;
}

console.log(lessThan(4, 4))

// ----- PARTE 2: OBJETOS E FOR/IN -----

// Exemplo de objeto:

let person = {
    name: 'Lucas',
    birthDate: '29/10/1991',
    eyeColor: 'Castanhos',
    height: '1.80',
    nickname: { name: 'Lucas', author: 'Cairo' }, // O objeto pode até mesmo conter outros objetos em sua estrutura.
  }

  // Modificando/adicionando propriedade de um objeto

  //// - Primeira maneira - 
//   person.city = 'BH'; //adicionando
//   person.eyeColor = 'Verdes'; //modificando


//   //// - Segunda maneira -
//   person['sport'] = 'Corrida';
//   person['name'] = 'Lucas Ferraz';
//   console.log(person);


  // Percorrendo um objeto usando estrutura de repetição (no caso, o for/in):

  for (let chave in person) {
      console.log(chave); // Assim serão exibidas apenas as chaves (propriedades)
  }

  for (let chave in person) {
      console.log(person[chave]); // Assim, serão exibidas os valores de cada propriedade do referido objeto.
  }

  for (let key in person) {
      console.log(key + ': ' + person[key]); // Assim, as informações estarão unificadas.
  }