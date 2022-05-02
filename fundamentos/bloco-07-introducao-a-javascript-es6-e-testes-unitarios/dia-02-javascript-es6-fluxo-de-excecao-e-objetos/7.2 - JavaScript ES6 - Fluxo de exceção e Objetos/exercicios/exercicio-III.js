const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addNewKey = (obj, key, value) => {    // cria uma função recebendo 3 parâmetros
  obj[key] = value;
};                                          /* pode-se acessar uma propriedade do objeto caso exista, atribuindo um novo valor, ou pode-se criar
//                                               nova chave e valor para o objeto */

addNewKey(lesson2, 'turno', 'noite'); // chama a função, passando os 3 parâmetros, onde nesse caso, cria uma nova chave atribuindo um valor
// console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => Object.keys(obj); // criar uma fincao retornando todas as chaves em um array do objeto recebido como parâmetro
// console.log(listKeys(lesson1)); // imprime na tela o array contendo as chaves do objeto em formato de strings

// 3. Crie uma função para mostrar o tamanho de um objeto.

const sizeObj = (obj) => Object.keys(obj).length; // criar uma função que retorna o tamanho do objeto de acordo com a quantidade de chaves
// console.log(sizeObj(lesson1)); // imprime na tela o tamanho do objeto recebido como parametro

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (obj) =>
  Object.values(
    obj
  ); /* cria uma função que retorna um array contendo os valores das chaves do objeto 
//                                                 passado no parâmetro */
// console.log(listValues(lesson1)); // imprime na tela o array com os valores do objeto

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign(
  {},
  { lesson1, lesson2, lesson3 }
); /* criar uma variável que armazena em um novo objeto vazio, pegando 3
//                                                                         referências, que são os 3 objetos dentro de chaves*/
// console.log(allLessons); // imprime na tela o novo objeto contendo todos os objetos copiados

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const getNumberOfStudents = (obj) => {
  // criar a funcao com um parametro
  let total = 0; // cria um contador a partir do zero
  const array = Object.keys(obj); // armazena em uma variavel um array de strings contendo as chaves do objeto
  // console.log(array); // imprime na tela a variavel que armazena as cahves do objeto

  for (const i in array) {
    // faz uma iteração nas chaves da variavel que armazena as chaves do objeto
    total += obj[array[i]].numeroEstudantes; // atualiza o valor da variavel total somando a cada iteração
    // console.log(obj[array[i]].numeroEstudantes); // imprime na tela o valor das proprieades numeroEstudante
  }
  return total; // retorna o valor final da variavel total apos finalizar o loop
};

// console.log(getNumberOfStudents(allLessons)); // imprime na tela o resultado final da função allLessons

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (obj,number) => Object.values(obj)[number]; // criar uma funcao que recebe dois parametros, o primeiro é o objeto e o segundo é o numero da propriedade ao qual se deseja acessar, ao utilizar o Object.values, retorna um array contendo todos os valores do objeto em questao, e ao passar o indice ao qual querendo acessar, temos o valor correspondente aquele indice;
// console.log(getValueByNumber(lesson1, 1));  // imprime na tela o valor da propriedade ao qual queremos acessar de acordo com o seu indice

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (obj, key, value) => {  // cria uma funcao que recebe 3 parametros, onde o primeiro é o objeto em questao, o segundo é a chave que sera iterada e o valor que sera iterado para serem verificados se existem ou nao
  const arr = Object.entries(obj);  // cria uma variavel que armazena um array de arrays, onde cada array contido dentro do array é um par de chave e valor

  let isEqual = false; // cria uma variavel boleano, onde inicializa com false

  for (let index in arr) {  // faz uma iteracao em cada indice do array de arrays
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;  // faz a verificacao entre cada indice do array acessando cada chave e valor, se atender a condicao, atualiza o valor da variavel anteriormente criada para true
  }

  return isEqual; // retorna a variavel contendo o resultado final do retorno da funcao
};

console.log(verifyPair(lesson2,'professor','Carlos'));  // printa na tela o resultado da funcao de acordo com os paramtros recebidos