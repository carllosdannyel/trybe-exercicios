// 1. Uma padaria acaba de juntar um dinheirinho a mais e quer comprar um robô para otimizar uma tarefa, para isso, contrataram você, 
// pessoa estudante da Trybe para poder ajudar a criar esse algoritmo. Bora?

// Pensando que temos um banco de dados e que a senha validada tem que ser ‘1234’ e exibirá a mensagem “Acesso permitido” e caso contrário “Acesso negado”;

// Atenção: O sistema deve verificar usuário e senha;

//Entrada

let userName = 'Tamara Simões';
let userPassword = 1234;
let access = true;

//Processamento 

if (userName == 'Tamara Simões' && userPassword === 1234) {
    console.log('Acesso permitido'); //Saída
    
}
else {
    console.log('Acesso negado'); //Saída
}



// ------------------------------------------------------------

// 2. ​Faça um programa que com determinada quantidade, adicione pães em uma sacola e exiba quantos pães foram adicionados
// um por um se o acesso for permitido. Se não permitido o acesso, não é possível acessar essa página​

// Como eu sei que o acesso está permitido ? 
// Se tiver permitido, exibe os pães na sacola 
// Se não, mensagem de erro​​


let quantidade = 10;
let bag = 0;

if (access === true) {
    for (let indexPaes = 0; indexPaes <= quantidade; indexPaes += 1) {
        bag = indexPaes;
        if (bag === 0) {
            console.log('A sacola está vazia');
        }
        else if (bag === 1) {
            console.log('Existe ' + bag + ' pão na sacola')
        }
        else {
            console.log('Existem ' + bag + ' pães na sacola')
        }
    }
}
else {
    console.log('Não é possível adicionar pães na sacola. Acesso negado');
}



// ------------------------------------------------------------

// 3. Análise de código
// Ingredientes do Xtudão: Pão, 3 pedaços de queijos, Pão, 3 pedaços de queijo e fecha com pão de fechamento.


for(let index = 0; index < 2; index += 1) {
  console.log("Adiciona pão");

  for(let indexQueijo = 0; indexQueijo < 3; indexQueijo += 1) {
    console.log("Adiciona queijo");
  }
}
console.log("Adiciona pão de fechamento");
