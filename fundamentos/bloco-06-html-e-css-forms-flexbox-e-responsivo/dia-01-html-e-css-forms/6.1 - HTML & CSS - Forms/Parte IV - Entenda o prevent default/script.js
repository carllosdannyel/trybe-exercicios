const button = document.querySelector("#buttonSubmit");
let inputNameUser = document.querySelector("#inputNameUser");
const nameUser = document.querySelector("#nameUser");

function getUserValue(event) {
  event.preventDefault();
  console.log(inputNameUser.value);
  nameUser.innerHTML = inputNameUser.value;
}
button.addEventListener("click", getUserValue);

// para ser possivel ver no console do navegador, deve-se navegar ate as configuracoes na mesma linha x do botao que limpa o console e ativar a opcao de checkbox preservar log ou preservar registro.

// Utilizando o preventDefault() para previnir os comportamentos padroes de alguma coisa e para utiliza-lo deve-se utilizar algum parametro para chamar a funcao como no exemplo acima que utilizando o parametro event
