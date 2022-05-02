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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// 1. 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const getNumberOfStudentsMath = (obj) => {
  // cria uma funcao que recebe deve receber como parametro um objeto
  let total = 0; // cria uma variavel contadora iniciando do 0
  const array = Object.keys(obj); // cria uma variavel que armazena as chaves do objeto

  for (index in array) {
    // cria um loop para iterar por cada chave do array de chaves
    if (obj[array[index]].materia === 'Matemática') {
      // se entrar nessa condicao o valor da variavel total vai ser
      total += obj[array[index]].numeroEstudantes; // atualizada para o valor atual mais o valor que aquela propriedade possui
    }
  }

  return total; // retorna o ultimo valor armazenado na variavel total
};

// console.log(getNumberOfStudentsMath(allLessons)); // imprime na tela o resultado da funcao

// 2. 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const getInfo = (obj, name) => { // cria uma funcao que recebe dois parametros
  
  const allLessons = []; // cria uma variavel que inicia com array vazio
  let allStudent = 0; // cria uma variavel que inicia com o numero 0
  const array = Object.values(obj); // cria uma variavel que armazena um array contendo os valores de um objeto
  
  for (index in array) {  // faz uma iteraca no array que armazena os valores do objeto
    if (array[index].professor === name) { // faz uma verificação se o valor da chave professor é estritamente igual ao 
      allLessons.push(array[index].materia);  // nome recebido como parametro, se sim, dar push na variavel que armazena
      allStudent += array[index].numeroEstudantes; // o array vazio e atualiza o valor da variavel que conta a 
    } // quantidade de estudantes que assistiu aquela aula
  }
  
  return { lessons: allLessons, estudantes: allStudent }; // retorna um objeto contendo as informacoes  
};
console.log(getInfo(allLessons, 'Maria Clara'));


const createReport = (allLessons, name) => { // criar uma funcao que recebe dois parametros, objeto e string
  const report = {}; // criar uma variavel contendo um objeto vazio
  report.professor = name; // adiciona uma chave e valor ao objeto vazio
  Object.assign(report, getInfo(allLessons, name)); // copia todo o objeto retornado da função anterior para o objeto 
  return report;  // criado na variavel report, e retorna a nova copia criada;
};
console.log(createReport(allLessons, 'Maria Clara')); // imprime na tela o relatorio final
