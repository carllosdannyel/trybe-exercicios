// const sum = (num1, num2) => num1 + num2

// console.log(sum(5, 5));

// const sum = (num1, num2) => num1 + num2

// console.log(sum(5, '5'));

// const sum = (num1, num2) => {
//   const resultado =
//     typeof num1 !== 'number' || typeof num2 !== 'number'
//       ? 'Os valores devem ser númericos'
//       : num1 + num2;
//   return resultado;
// };

// console.log(sum(1, '2'));

// const sum = (num1, num2) => {
//   if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//     throw new Error('Os valores devem ser númericos');
//   } else {
//     return num1 + num2;
//   }
// };

// console.log(sum(1, '2'));

// const verificaNumero = (n1, n2) => {
//   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//     throw new Error('Os valores devem ser númericos');
//   }
// };

// const sum = (n1, n2) => {
//   try {
//     verificaNumero(n1, n2);
//     return n1 + n2;
//   } catch (error) {
//     return error.message;
//   }
// };

// console.log(sum(1, '2'));

// const informacoesPessoais = {
//   nome: 'Carlos Daniel',
//   sobreNome: 'Jovelino Pereira Dos Santos',
//   idade: 22,
// };

// informacoesPessoais['nomeCompleto'] = `${informacoesPessoais.nome} ${informacoesPessoais.sobreNome}`
// informacoesPessoais.profissao = 'Estudante da Trybe'
// console.log(informacoesPessoais)

// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName'; //criando uma variavel do tipo let e atribuindo uma string a ela

// const lastName = 'Ferreira'; //criando uma variavel do tipo const e atribuindo uma string a ela

// customer[newKey] = lastName; //adicionando chave e valor ao objeto customer, onde a chave é a variavel newKey e o valor é a variavel lastName, resultando em um objeto da seguinte forma: { firstName: 'Roberto', age: 22, job: 'Teacher, lastName: 'Ferreira }

// newKey = 'fullName'; // atualizando o valor da variavel newKey para 'fullName'

// const fullName = `${customer.firstName} ${customer.lastName}`; // criando uma variavel do tipo const e atribuindo a ela uma template literals com firstName e lastName do objeto, resultando na concatenação da duas strings;

// customer[newKey] = fullName; // atribuindo uma nova chave ao objeto atraves de uma variavel, onde a chave é a fullName, e o valor é o valor atribuido a variavel que que concatena o irstNAme e o lastName;

// console.log(customer);

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   author: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// for (const property in coolestTvShow) {
//   console.log(`essa é uma chave ${property}`);
// }
// console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]
// name
// genre
// author
// favoriteCharacter
// quote
// seasons

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };
// // Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".

// const niveisDeHabilidades = (chaveValor) => {
//   console.log(`${Object.keys(chaveValor)}, Nível: ${Object.values(chaveValor)}`)
// }

// niveisDeHabilidades(student1)
// niveisDeHabilidades(student2)

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listaDeHabilidades = (student) => {
//   const arrayDeHabilidades = Object.keys(student);
//   for (const index in arrayDeHabilidades) {
//     console.log(
//       `${arrayDeHabilidades[index]}, Nível: ${
//         student[arrayDeHabilidades[index]]
//       }`
//     );
//   }
// };

// console.log('Estudante 1');
// listaDeHabilidades(student1);

// console.log('Estudante 2');
// listaDeHabilidades(student2);

// const habilidade = (estudante) => {
//   const chavesHabilidades = Object.keys(estudante);
//   for (const i in chavesHabilidades) {
//     console.log(
//       `${chavesHabilidades[i]}, Nível: ${estudante[chavesHabilidades[i]]}`
//     );
//   }
// };

// console.log('estudante 1');
// habilidade(student1);

// console.log('estudante 2');
// habilidade(student2);

// const tvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// const teste = (param) => {
//   const chaves = Object.keys(param);
//   for (const i in chaves) {
//     console.log(`chave: ${chaves[i]}, valor: ${tvShow[chaves[i]]}`);
//   }
// };
// teste(tvShow)
// // BoJack Horseman
// // adult animation
// // Raphael Bob-Waksberg
// // Princess Carolyn
// // Princess Carolyn always lands on her feet.
// // 6

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// // for (const property in coolestTvShow) {
// //   console.log(coolestTvShow[property]);
// // }

// console.log(Object.values(coolestTvShow));

// [
//   'BoJack Horseman',
//   'adult animation',
//   'Raphael Bob-Waksberg',
//   'Princess Carolyn',
//   'Princess Carolyn always lands on her feet.'
//    6
// ]

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// console.log(Object.entries(coolestTvShow));

// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]

// const obj = { foo: 'bar', baz: 42 };
// const map = new Map(Object.entries(obj));
// console.log(map); // Map { foo: "bar", baz: 42 } || Map(2) { 'foo' => 'bar', 'baz' => 42 }

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for (const i in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[i][0]);
//   console.log('Capital:', pairKeyValue[i][1]);
// }

// const nomes = {
//   Flavia: 'carla',
//   Carlos: 'Daniel',
//   Maria: 'Vitória',
//   Guilherme: 'Jovelino',
//   Aparecida: 'Jovelino',
// };
// const arrayOfArray = Object.entries(nomes);

// console.log('Sem template Literals\n');
// for (const i in arrayOfArray) {
//   console.log('Nome:', arrayOfArray[i][0]);
//   console.log('SobreNome:', arrayOfArray[i][1]);
//   console.log('')
// }

// console.log(`Com template Literals\n`);
// for (const i in arrayOfArray) {
//   console.log(`Nome: ${arrayOfArray[i][0]}`);
//   console.log(`SobreNome: ${arrayOfArray[i][1]}`);
//   console.log(``)
// }

// const pessoa = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// const informacao = {
//   age: 23,
//   job: 'engenheiro',
// };

// const familia = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
// };

// Object.assign(pessoa, informacao, familia)
// console.log(pessoa)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

// const pessoa = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(pessoa, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(pessoa); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(pessoa); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// pessoa.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto pessoa');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(pessoa); // Output: { name: 'Maria', lastName: 'Ferreira' }

// const obj = { value1: 10, value2: 11 };
// const cloneObj = obj;
// cloneObj.value3 = 12;
// console.log(obj);
// console.log(cloneObj);

// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const newPerson = Object.assign({}, person, lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);
